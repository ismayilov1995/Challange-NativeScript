import { Component, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { ChallengeService } from "../challenge.service";

@Component({
    selector: "ns-challange-edit",
    templateUrl: "./challange-edit.component.html",
    styleUrls: ["./challange-edit.component.scss"],
})
export class ChallangeEditComponent implements OnInit {
    isCreating = true;

    constructor(
        private pageRoute: PageRoute,
        private router: RouterExtensions,
        private challengeService: ChallengeService
    ) {}

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

    onSubmit(title: string, description: string): void {
        this.challengeService.createNewChallange(title, description);
        this.router.backToPreviousPage();
    }
}
