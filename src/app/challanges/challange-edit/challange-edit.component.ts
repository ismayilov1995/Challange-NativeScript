import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PageRoute } from "nativescript-angular/router";

@Component({
    selector: "ns-challange-edit",
    templateUrl: "./challange-edit.component.html",
    styleUrls: ["./challange-edit.component.css"],
})
export class ChallangeEditComponent implements OnInit {
    isCreating = true;

    constructor(private route: ActivatedRoute, private pageRoute: PageRoute) {}

    ngOnInit(): void {
        this.pageRoute.activatedRoute.subscribe((activatedRoute) => {
            activatedRoute.paramMap.subscribe((param) => {
                if (!param.has("mode")) {
                    this.isCreating = true;
                } else {
                    this.isCreating = param.get("mode") !== "edit";
                }
            });
        });
    }
}
