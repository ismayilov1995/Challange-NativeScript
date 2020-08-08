import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Challenge } from "./challenge.model";
import { Observable } from "tns-core-modules/ui/page";

@Injectable({
    providedIn: "root",
})
export class ChallengeService {
    private _currentChallenge = new BehaviorSubject<Challenge>(null);

    constructor() {}

    get currentChallenge() {
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
