import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "ns-challange-edit",
    templateUrl: "./challange-edit.component.html",
    styleUrls: ["./challange-edit.component.css"],
})
export class ChallangeEditComponent implements OnInit {
    @Output() input = new EventEmitter<string>();
    challangeDescription = "";

    constructor() {}

    ngOnInit() {}

    onSetChallange(): void {
        this.input.emit(this.challangeDescription);
        this.challangeDescription = "";
    }
}
