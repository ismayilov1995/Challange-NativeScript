import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: "ns-challange-edit",
    templateUrl: "./challange-edit.component.html",
    styleUrls: ["./challange-edit.component.scss"],
})
export class ChallangeEditComponent implements OnInit {
    isCreating = true;

    constructor(
        private route: ActivatedRoute,
        private pageRoute: PageRoute,
        private router: RouterExtensions
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
        console.log(title, description);
        this.router.backToPreviousPage();
    }
}
