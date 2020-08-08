import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

    private _currentChallenge = new BehaviorSubject<{}>(null);

  constructor() { }




}
