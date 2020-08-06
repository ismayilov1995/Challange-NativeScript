import { Component, OnInit, OnDestroy } from "@angular/core";
import { UIService } from "./shared/ui/ui.service";
import { Subscribable, Subscription } from "rxjs";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit, OnDestroy {
    challangeTitle: string;
    private subs: Subscription;

    constructor(private uiService: UIService) {}

    ngOnInit(): void {
        this.subs = this.uiService.drawerState.subscribe(() => {
            console.log("sasa");
        });
    }

    onChallangeInput(challangeDesc: string) {
        this.challangeTitle = challangeDesc;
    }

    ngOnDestroy(): void {
        if (this.subs) {
            this.subs.unsubscribe();
        }
    }
}
