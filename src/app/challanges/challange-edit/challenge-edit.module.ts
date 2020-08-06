import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ChallangeEditComponent } from "./challange-edit.component";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { SharedModule } from "~/app/shared/Shared.module";

@NgModule({
    declarations: [ChallangeEditComponent],
    imports: [
        SharedModule,
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            { path: "", component: ChallangeEditComponent },
        ]),
    ],
    schemas: [NO_ERRORS_SCHEMA],
})
export class ChallengeEditModule {}
