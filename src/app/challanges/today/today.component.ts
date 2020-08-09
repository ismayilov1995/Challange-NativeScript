import { Component, OnInit, OnDestroy } from "@angular/core";
import { ChallengeService } from "../challenge.service";
import { Day, DayStatus } from "../day.model";
import { Subscription } from "rxjs";

@Component({
    selector: "ns-today",
    templateUrl: "./today.component.html",
    styleUrls: ["./today.component.scss"],
})
export class TodayComponent implements OnInit, OnDestroy {
    currentDay: Day;
    private subs: Subscription;
    constructor(private challengeService: ChallengeService) {}

    ngOnInit() {
        this.subs = this.challengeService.currentChallenge.subscribe(
            (challenge) => {
                if (challenge) {
                    this.currentDay = challenge.currentDay;
                }
            }
        );
    }

    onActionSelected(action: DayStatus): void {
        this.challengeService.updateDayStatus(
            this.currentDay.dayInMonth,
            action
        );
    }

    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }
}
