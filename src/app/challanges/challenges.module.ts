import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ChallengesRoutingModule } from "./challenges-routing.module";
import { ChallangeTabsComponent } from "./challange-tabs/challange-tabs.component";
import { TodayComponent } from "./today/today.component";
import { CurrentChallangeComponent } from "./current-challange/current-challange.component";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { SharedModule } from "../shared/Shared.module";
import { ChallangeActionsModule } from "./challange-actions/challanges-actions.module";

@NgModule({
    declarations: [
        ChallangeTabsComponent,
        CurrentChallangeComponent,
        TodayComponent,
    ],
    imports: [
        NativeScriptCommonModule,
        ChallengesRoutingModule,
        SharedModule,
        ChallangeActionsModule,
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class ChallangesModule {}
