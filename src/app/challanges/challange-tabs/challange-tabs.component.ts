import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { ActivatedRoute } from "@angular/router";
import { Page } from "tns-core-modules/ui/page";
import { ChallengeService } from "../challenge.service";

@Component({
    selector: "ns-challange-tabs",
    templateUrl: "./challange-tabs.component.html",
    styleUrls: [
        "./challange-tabs.component.css",
        "./challange-tabs.component.common.css",
    ],
})
export class ChallangeTabsComponent implements OnInit {
    isLoading = false;
    constructor(
        private router: RouterExtensions,
        private active: ActivatedRoute,
        private challengeService: ChallengeService
    ) {}

    ngOnInit() {
        this.isLoading = true;
        this.getChallenges();
        this.loadTabRoutes();
    }

    getChallenges() {
        this.challengeService.fetchChallenges().subscribe(
            (challenge) => {
                this.isLoading = false;
                console.log("challenge");
                console.log(challenge);
            },
            (error) => {
                this.isLoading = false;
                console.log(error);
            }
        );
    }

    loadTabRoutes() {
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
                relativeTo: this.active,
            }
        );
        // this.page.actionBarHidden = true;
    }
}
