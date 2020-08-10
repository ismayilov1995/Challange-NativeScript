import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject, Observable, of, Subscription } from "rxjs";
import { Challenge } from "./challenge.model";
import { DayStatus } from "./day.model";
import { take, tap, map, catchError, mapTo, switchMap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../auth/auth.service";

@Injectable({ providedIn: "root" })
export class ChallengeService implements OnDestroy {
    private _currentChallenge = new BehaviorSubject<Challenge>(null);
    private userSub: Subscription;

    constructor(private http: HttpClient, private authService: AuthService) {
        this.userSub = authService.user.subscribe((user) => {
            if (!user) {
                this._currentChallenge.next(null);
            }
        });
    }

    ngOnDestroy() {
        this.userSub.unsubscribe();
    }

    get currentChallenge(): Observable<Challenge> {
        return this._currentChallenge.asObservable();
    }

    fetchChallenges() {
        return this.authService.user.pipe(
            switchMap((user) => {
                if (!user || !user.isAuth) {
                    return;
                }
                return this.http.get<Challenge>(this.url(user.id, user.token));
            }),
            tap((resData) => {
                if (resData) {
                    const loadedChallenge = new Challenge(
                        resData.title,
                        resData.description,
                        resData.year,
                        resData.month,
                        resData._days
                    );
                    this._currentChallenge.next(loadedChallenge);
                }
            }),
            mapTo(true),
            catchError((error) => {
                console.log("Ssusus", error);
                return of(false);
            })
        );
    }

    createNewChallange(title: string, description: string) {
        const challenge = new Challenge(
            title,
            description,
            new Date().getFullYear(),
            new Date().getMonth()
        );
        this._currentChallenge.next(challenge);
        this.saveToServer(challenge);
    }

    updateChallange(title: string, description: string) {
        this._currentChallenge.pipe(take(1)).subscribe((challenge) => {
            challenge.title = title;
            challenge.description = description;
            this._currentChallenge.next(challenge);
            this.saveToServer(challenge);
        });
    }

    updateDayStatus(dayInMonth: number, status: DayStatus) {
        this._currentChallenge.pipe(take(1)).subscribe((challenge) => {
            if (!challenge || challenge.days.length < dayInMonth) {
                return;
            }
            const dayIndex = challenge.days.findIndex(
                (d) => d.dayInMonth === dayInMonth
            );
            challenge.days[dayIndex].status = status;
            this._currentChallenge.next(challenge);
            this.saveToServer(challenge);
        });
    }

    private saveToServer(challenge: Challenge) {
        this.authService.user
            .pipe(
                switchMap((user) => {
                    if (!user || !user.isAuth) return;
                    return this.http.put(
                        this.url(user.id, user.token),
                        challenge
                    );
                })
            )
            .subscribe((res) => {
                console.log("Updated");
            });
    }

    private url(userId: string, token) {
        return `https://challenge-nativescript.firebaseio.com/challenge/${userId}.json?auth=${token}`;
    }
}
