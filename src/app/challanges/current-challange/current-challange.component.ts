import { Component, OnInit, Input } from "@angular/core";
import { ItemEventData } from "tns-core-modules/ui/list-view";

@Component({
    selector: "ns-current-challange",
    templateUrl: "current-challange.component.html",
    styleUrls: ["current-challange.component.css"],
})
export class CurrentChallangeComponent implements OnInit {
    @Input() challanges: string[] = [];

    constructor() {}

    ngOnInit() {}

    onItemTap(e: ItemEventData): void {
        console.log(e);
    }
}
