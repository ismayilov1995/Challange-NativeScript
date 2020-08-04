import { Component, OnInit, Input } from "@angular/core";

@Component({
    selector: "ns-current-challange",
    templateUrl: "current-challange.component.html",
    styleUrls: ["current-challange.component.css"],
})
export class CurrentChallangeComponent implements OnInit {
    @Input() challanges: string[] = [];

    constructor() {}

    ngOnInit() {}

}
