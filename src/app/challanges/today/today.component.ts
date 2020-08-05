import { Component, OnInit } from "@angular/core";
import { isAndroid } from "tns-core-modules/platform";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "ns-today",
    templateUrl: "./today.component.html",
    styleUrls: ["./today.component.css"],
})
export class TodayComponent implements OnInit {
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
