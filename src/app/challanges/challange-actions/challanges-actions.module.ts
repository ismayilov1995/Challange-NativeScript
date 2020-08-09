import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { ChallangeActionsComponent } from "./challange-actions.component";
import { NativeScriptCommonModule } from "nativescript-angular/common";

@NgModule({
    declarations: [ChallangeActionsComponent],
    imports: [NativeScriptCommonModule],
    exports: [ChallangeActionsComponent],
    schemas: [NO_ERRORS_SCHEMA],
})
export class ChallangeActionsModule {}
