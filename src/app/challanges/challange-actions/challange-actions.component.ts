import {
    Component,
    OnInit,
    Output,
    EventEmitter,
    Input,
    OnChanges,
    SimpleChanges,
} from "@angular/core";
import { DayStatus } from "../day.model";

@Component({
    selector: "ns-challange-actions",
    templateUrl: "./challange-actions.component.html",
    styleUrls: ["./challange-actions.component.scss"],
})
export class ChallangeActionsComponent implements OnInit, OnChanges {
    @Output() actionSelect = new EventEmitter<DayStatus>();
    @Input() cancelText: string = "Cancel";
    @Input() choosen: "complete" | "fail" = null;
    action: "complete" | "fail" = null;
    done = false;

    constructor() {}

    ngOnInit(): void {}

    ngOnChanges(changes: SimpleChanges) {
        if (changes.choosen) {
            this.action = changes.choosen.currentValue;
        }
    }

    inAction(action: "complete" | "fail" | "cancel"): void {
        this.done = true;
        let status = DayStatus.Open;
        this.action = null;
        if (action === "complete") {
            status = DayStatus.Completed;
            this.action = action;
        } else if (action === "fail") {
            status = DayStatus.Failed;
            this.action = action;
        } else {
            this.done = false;
        }
        this.actionSelect.emit(status);
    }
}
