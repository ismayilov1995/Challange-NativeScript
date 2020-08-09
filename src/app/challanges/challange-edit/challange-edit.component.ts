import { Component, OnInit } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { ChallengeService } from "../challenge.service";
import { take } from "rxjs/operators";

@Component({
    selector: "ns-challange-edit",
    templateUrl: "./challange-edit.component.html",
    styleUrls: ["./challange-edit.component.scss"],
})
export class ChallangeEditComponent implements OnInit {
    isCreating = true;
    title: string;
    description: string;

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
                if (!this.isCreating) {
                    this.challengeService.currentChallenge
                        .pipe(take(1))
                        .subscribe((challenge) => {
                            this.title = challenge.title;
                            this.description = challenge.description;
                        });
                }
            });
        });
    }

    onSubmit(title: string, description: string): void {
        if (this.isCreating) {
            this.challengeService.createNewChallange(title, description);
        } else {
            this.challengeService.updateChallange(title, description);
        }
        this.router.backToPreviousPage();
    }
}
