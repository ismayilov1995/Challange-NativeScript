import { Component, OnInit, Input } from "@angular/core";
import { isAndroid } from "tns-core-modules/platform";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "@nativescript/angular";
import { UIService } from "../ui.service";

declare let android: any;

@Component({
    selector: "ns-action-bar",
    templateUrl: "./action-bar.component.html",
    styleUrls: ["./action-bar.component.css"],
})
export class ActionBarComponent implements OnInit {
    @Input() title: string;
    @Input() showBackButton = true;
    @Input() hasMenu = true;

    constructor(
        private page: Page,
        private router: RouterExtensions,
        private uiService: UIService
    ) {}

    ngOnInit() {}

    get isAndroid(): boolean {
        return isAndroid;
    }

    get canGoBack(): boolean {
        return this.router.canGoBack() && this.showBackButton;
    }

    onGoBack(): void {
        this.router.backToPreviousPage();
    }

    onLoadedActionBar(): void {
        if (isAndroid) {
            const backButton = this.page.actionBar.nativeView.getNavigationIcon();
            if (backButton) {
                backButton.setColorFilter(
                    android.graphics.Color.parseColor("#FFFFFF"),
                    (<any>android.graphics).PorterDuff.Mode.SRC_ATOP
                );
            }
        }
    }

    onToggleMenu(): void {
        this.uiService.toggleDrawer();
    }
}
