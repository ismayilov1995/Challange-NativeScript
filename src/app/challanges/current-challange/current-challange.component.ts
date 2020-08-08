import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ModalDialogService } from "nativescript-angular/common";
import { DayModalComponent } from "../day-modal/day-modal.component";
import { UIService } from "~/app/shared/ui/ui.service";

@Component({
    selector: "ns-current-challange",
    templateUrl: "current-challange.component.html",
    styleUrls: [
        "_current-challenge.component.common.scss",
        "current-challenge.component.scss",
    ],
})
export class CurrentChallangeComponent implements OnInit {
    weekDays = ["S", "M", "T", "W", "T", "F", "S"];
    days: { dayInMonth: number; dayInWeek: number }[] = [];
    private curYear: number;
    private curMonth: number;
    constructor(
        private uiService: UIService,
        private vcRef: ViewContainerRef,
        private modalDialog: ModalDialogService
    ) {}

    ngOnInit(): void {
        this.curYear = new Date().getFullYear();
        this.curMonth = new Date().getMonth();
        const daysInMonth = new Date(
            this.curYear,
            this.curMonth + 1,
            0
        ).getDate();
        for (let i = 1; i < daysInMonth + 1; i++) {
            const date = new Date(this.curYear, this.curMonth, i);
            const dayInWeek = date.getDay();
            this.days.push({ dayInMonth: i, dayInWeek: dayInWeek });
        }
    }

    getRow(
        index: number,
        day: { dayInMonth: number; dayInWeek: number }
    ): number {
        const startRow = 1;
        const weekRow = Math.floor(index / 7);
        const firstWeekDayOfMonth = new Date(
            this.curYear,
            this.curMonth,
            1
        ).getDay();
        const irregularRow = day.dayInWeek < firstWeekDayOfMonth ? 1 : 0;
        return startRow + weekRow + irregularRow;
    }

    onChangeStatus() {
        this.modalDialog
            .showModal(DayModalComponent, {
                fullscreen: true,
                viewContainerRef: this.uiService.getRootVCRef()
                    ? this.uiService.getRootVCRef()
                    : this.vcRef,
                context: { date: new Date() },
            })
            .then((res: string) => {
                console.log(res);
            });
    }
}
