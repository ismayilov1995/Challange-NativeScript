import {
    Component,
    OnInit,
    OnDestroy,
    ViewChild,
    AfterViewInit,
    ChangeDetectorRef,
    ViewContainerRef,
} from "@angular/core";
import { UIService } from "./shared/ui/ui.service";
import { Subscribable, Subscription } from "rxjs";
import { RadSideDrawerComponent } from "nativescript-ui-sidedrawer/angular";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { AuthService } from "./auth/auth.service";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild(RadSideDrawerComponent, { static: true })
    drawerComponent: RadSideDrawerComponent;
    challangeTitle: string;
    private subs: Subscription;
    private drawer: RadSideDrawer;

    constructor(
        private uiService: UIService,
        private changeDetectionRef: ChangeDetectorRef,
        private vcRef: ViewContainerRef,
        private authService: AuthService
    ) {}

    ngOnInit(): void {
        this.uiService.setRootVCRef(this.vcRef);
        this.subs = this.uiService.drawerState.subscribe(() => {
            if (this.drawer) {
                this.drawer.toggleDrawerState();
            }
        });
    }

    ngAfterViewInit(): void {
        this.drawer = this.drawerComponent.sideDrawer;
        this.changeDetectionRef.detectChanges();
    }

    onChallangeInput(challangeDesc: string) {
        this.challangeTitle = challangeDesc;
    }

    onLogout(): void {
        this.drawer.toggleDrawerState();
        this.authService.logout();
    }

    ngOnDestroy(): void {
        if (this.subs) {
            this.subs.unsubscribe();
        }
    }
}
