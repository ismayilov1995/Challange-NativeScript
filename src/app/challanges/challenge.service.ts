import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Challenge } from "./challenge.model";
import { DayStatus } from "./day.model";
import { last, take } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class ChallengeService {
    private _currentChallenge = new BehaviorSubject<Challenge>(null);

    constructor() {}

    get currentChallenge(): Observable<Challenge> {
        return this._currentChallenge.asObservable();
    }

    createNewChallange(title: string, description: string) {
        const challange = new Challenge(
            title,
            description,
            new Date().getFullYear(),
            new Date().getMonth()
        );
        // Save it to server
        this._currentChallenge.next(challange);
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
