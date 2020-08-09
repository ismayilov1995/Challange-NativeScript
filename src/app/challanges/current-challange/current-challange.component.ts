import { Component, OnInit, ViewContainerRef, OnDestroy } from "@angular/core";
import { ModalDialogService } from "nativescript-angular/common";
import { DayModalComponent } from "../day-modal/day-modal.component";
import { UIService } from "~/app/shared/ui/ui.service";
import { ChallengeService } from "../challenge.service";
import { Challenge } from "../challenge.model";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { RouterExtensions } from "nativescript-angular/router";
import { Day, DayStatus } from "../day.model";

@Component({
    selector: "ns-current-challange",
    templateUrl: "current-challange.component.html",
    styleUrls: [
        "_current-challenge.component.common.scss",
        "current-challenge.component.scss",
    ],
})
export class CurrentChallangeComponent implements OnInit, OnDestroy {
    weekDays = ["S", "M", "T", "W", "T", "F", "S"];
    currentChallenge: Challenge;
    private subs = new Subject();

    constructor(
        private uiService: UIService,
        private vcRef: ViewContainerRef,
        private modalDialog: ModalDialogService,
        private challengeService: ChallengeService,
        private router: RouterExtensions
    ) {}

    ngOnInit(): void {
        this.challengeService.currentChallenge
            .pipe(takeUntil(this.subs))
            .subscribe((challenge) => {
                this.currentChallenge = challenge;
            });
    }

    onBack() {
        this.router.backToPreviousPage();
    }

    getRow(
        index: number,
        day: { dayInMonth: number; dayInWeek: number }
    ): number {
        const startRow = 1;
        const weekRow = Math.floor(index / 7);
        const firstWeekDayOfMonth = new Date(
            new Date().getFullYear(),
            new Date().getMonth(),
            1
        ).getDay();
        const irregularRow = day.dayInWeek < firstWeekDayOfMonth ? 1 : 0;
        return startRow + weekRow + irregularRow;
    }

    getIsSettable(dayInMonth: number) {
        return dayInMonth <= new Date().getDate();
    }

    onChangeStatus(day: Day) {
        if (!this.getIsSettable(day.dayInMonth)) return;
        this.modalDialog
            .showModal(DayModalComponent, {
                fullscreen: true,
                viewContainerRef: this.uiService.getRootVCRef()
                    ? this.uiService.getRootVCRef()
                    : this.vcRef,
                context: { date: day.date },
            })
            .then((status: DayStatus) => {
                this.challengeService.updateDayStatus(day.dayInMonth, status);
            });
    }

    ngOnDestroy(): void {
        this.subs.next();
    }
}
