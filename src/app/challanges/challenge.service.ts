import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, of } from "rxjs";
import { Challenge } from "./challenge.model";
import { DayStatus } from "./day.model";
import { take, tap, map, catchError, mapTo } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class ChallengeService {
    private url =
        "https://challenge-nativescript.firebaseio.com/challenge.json";
    private _currentChallenge = new BehaviorSubject<Challenge>(null);

    constructor(private http: HttpClient) {}

    get currentChallenge(): Observable<Challenge> {
        return this._currentChallenge.asObservable();
    }

    fetchChallenges() {
        return this.http.get<Challenge>(this.url).pipe(
            tap((res) => {
                if (res) {
                    const newData = new Challenge(
                        res.title,
                        res.description,
                        res.year,
                        res.month,
                        res.days
                    );
                    this._currentChallenge.next(newData);
                }
            }),
            mapTo(true),
            catchError((error) => of(false))
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
        this.http.put(this.url, challenge).subscribe((res) => {
            console.log(res);
        });
    }

    updateChallange(title: string, description: string) {
        this._currentChallenge.pipe(take(1)).subscribe((challenge) => {
            challenge.title = title;
            challenge.description = description;
            this._currentChallenge.next(challenge);
        });
        // Save it to server
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
        });
    }
}
