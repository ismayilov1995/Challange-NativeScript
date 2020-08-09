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
    constructor(private modalParams: ModalDialogParams) {}

    ngOnInit(): void {
        this.date = (this.modalParams.context as { date: Date }).date;
    }

    onHandleInput(action: DayStatus): void {
        this.modalParams.closeCallback(action);
    }
}
