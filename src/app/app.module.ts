import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
    NativeScriptModule,
    NativeScriptFormsModule,
} from "@nativescript/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

import { AppComponent } from "./app.component";
import { AuthComponent } from "./auth/auth.component";
import { AppRoutingModule } from "./app-routing.module";
import { DayModalComponent } from "./challanges/day-modal/day-modal.component";
import { SharedModule } from "./shared/Shared.module";
import { ChallangeActionsModule } from "./challanges/challange-actions/challanges-actions.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        ReactiveFormsModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule,
        NativeScriptUISideDrawerModule,
        AppRoutingModule,
        SharedModule,
        ChallangeActionsModule,
    ],
    declarations: [AppComponent, AuthComponent, DayModalComponent],
    providers: [],
    entryComponents: [DayModalComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
