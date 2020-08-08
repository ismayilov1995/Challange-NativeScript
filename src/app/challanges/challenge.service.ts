import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Challenge } from "./challenge.model";

@Injectable({
    providedIn: "root",
})
export class ChallengeService {
    private _currentChallenge = new BehaviorSubject<Challenge>(null);

    constructor() {}
}
