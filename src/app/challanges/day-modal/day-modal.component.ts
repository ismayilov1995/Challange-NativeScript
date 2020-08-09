import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/common";
import { DayStatus } from "../day.model";

@Component({
    selector: "ns-day-modal",
    templateUrl: "./day-modal.component.html",
    styleUrls: ["./day-modal.component.css"],
})
export class DayModalComponent implements OnInit {
    date: Date;
    status: "complete" | "fail" = null;
    constructor(private modalParams: ModalDialogParams) {}

    ngOnInit(): void {
        const contex = this.modalParams.context as {
            date: Date;
            status: DayStatus;
        };
        this.date = contex.date;
        switch (contex.status) {
            case DayStatus.Completed:
                this.status = "complete";
            case DayStatus.Failed:
                this.status = "fail";
            default:
                this.status = null;
                return;
        }
    }

    onHandleInput(action: DayStatus): void {
        this.modalParams.closeCallback(action);
    }
}
