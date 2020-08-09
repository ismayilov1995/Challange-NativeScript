import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { DayStatus } from "../day.model";

@Component({
    selector: "ns-challange-actions",
    templateUrl: "./challange-actions.component.html",
    styleUrls: ["./challange-actions.component.scss"],
})
export class ChallangeActionsComponent implements OnInit {
    @Output() actionSelect = new EventEmitter<DayStatus>();
    @Input() cancelText: string = "Cancel";
    action: "complete" | "fail" = null;

    constructor() {}

    ngOnInit(): void {}

    inAction(action: "complete" | "fail" | "cancel"): void {
        let status = DayStatus.Open;
        this.action = null;
        if (action === "complete") {
            status = DayStatus.Completed;
            this.action = action;
        } else if (action === "fail") {
            status = DayStatus.Failed;
            this.action = action;
        }
        this.actionSelect.emit(status);
    }
}
