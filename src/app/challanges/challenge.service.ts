import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Challenge } from "./challenge.model";

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
}
