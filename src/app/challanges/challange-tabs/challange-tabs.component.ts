import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { ActivatedRoute } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "ns-challange-tabs",
    templateUrl: "./challange-tabs.component.html",
    styleUrls: [
        "./challange-tabs.component.css",
        "./challange-tabs.component.common.css",
    ],
})
export class ChallangeTabsComponent implements OnInit {
    constructor(
        private router: RouterExtensions,
        private active: ActivatedRoute,
        private page: Page
    ) {}

    ngOnInit() {
        this.router.navigate(
            [
                {
                    outlets: {
                        currentChallenge: ["current-challenge"],
                        today: ["today"],
                    },
                },
            ],
            {
                relativeTo: this.active
            }
        );
        // this.page.actionBarHidden = true;
    }
}
