import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "ns-current-challange",
    templateUrl: "current-challange.component.html",
    styleUrls: ["current-challange.component.css"],
})
export class CurrentChallangeComponent implements OnInit {
    constructor(private router: RouterExtensions) {}

    ngOnInit() {}

}
