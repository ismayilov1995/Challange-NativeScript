import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
    NativeScriptModule,
    NativeScriptFormsModule,
} from "@nativescript/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppComponent } from "./app.component";
import { CurrentChallangeComponent } from "./challanges/current-challange/current-challange.component";
import { StackComponent } from "./layouts/stack/stack.component";
import { FlexboxComponent } from "./layouts/flexbox/flexbox.component";
import { GridComponent } from "./layouts/grid/grid.component";
import { AbsoluteComponent } from "./layouts/absolute/absolute.component";
import { AuthComponent } from "./auth/auth.component";
import { TodayComponent } from "./challanges/today/today.component";
import { AppRoutingModule } from "./app-routing.module";
import { ChallangeTabsComponent } from "./challanges/challange-tabs/challange-tabs.component";
import { DayModalComponent } from "./challanges/day-modal/day-modal.component";
import { SharedModule } from "./shared/Shared.module";

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        AppRoutingModule,
        NativeScriptUISideDrawerModule,
        SharedModule
    ],
    declarations: [
        AppComponent,
        CurrentChallangeComponent,
        StackComponent,
        FlexboxComponent,
        GridComponent,
        AbsoluteComponent,
        AuthComponent,
        TodayComponent,
        ChallangeTabsComponent,
        DayModalComponent,
    ],
    providers: [],
    entryComponents: [DayModalComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
