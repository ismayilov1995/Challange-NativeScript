import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
    NativeScriptModule,
    NativeScriptFormsModule,
} from "@nativescript/angular";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { DayModalComponent } from "./challanges/day-modal/day-modal.component";
import { ChallangeActionsModule } from "./challanges/challange-actions/challanges-actions.module";

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpClientModule,
        NativeScriptUISideDrawerModule,
        AppRoutingModule,
        ChallangeActionsModule,
    ],
    declarations: [AppComponent, DayModalComponent],
    providers: [],
    entryComponents: [DayModalComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
