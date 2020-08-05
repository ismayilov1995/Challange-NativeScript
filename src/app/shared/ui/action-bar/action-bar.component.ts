import { Component, OnInit, Input } from "@angular/core";
import { isAndroid } from "tns-core-modules/platform";
import { Page } from "tns-core-modules/ui/page";

declare let android: any;

@Component({
    selector: "ns-action-bar",
    templateUrl: "./action-bar.component.html",
    styleUrls: ["./action-bar.component.css"],
})
export class ActionBarComponent implements OnInit {
    @Input() title: string;

    constructor(private page: Page) {}

    ngOnInit() {}

    onLoadedActionBar(): void {
        if (isAndroid) {
            this.page.actionBar.nativeView
                .getNavigationIcon()
                .setColorFilter(
                    android.graphics.Color.parseColor("#171717"),
                    android.graphics.PorterDuff.Mode.SRC_ATOP
                );
        }
    }
}
