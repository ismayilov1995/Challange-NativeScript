import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
    selector: "ns-challange-actions",
    templateUrl: "./challange-actions.component.html",
    styleUrls: ["./challange-actions.component.scss"],
})
export class ChallangeActionsComponent implements OnInit {
    @Output() actionSelect = new EventEmitter<"complete" | "fail" | "cancel">();
    @Input() cancelText: string = 'Cancel';

    constructor() {}

    ngOnInit(): void {}

    inAction(action: "complete" | "fail" | "cancel"): void {
        this.actionSelect.emit(action);
    }
}
