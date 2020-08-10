import { NgModule } from "@angular/core";
import { AuthComponent } from "./auth.component";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/Shared.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ReactiveFormsModule,
        NativeScriptFormsModule,
        SharedModule,
        NativeScriptRouterModule.forChild([
            { path: "", component: AuthComponent },
        ]),
    ],
    declarations: [AuthComponent],
})
export class AuthModule {}
