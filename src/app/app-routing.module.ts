import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "@nativescript/angular/router";
import { Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { TodayComponent } from "./challanges/today/today.component";
import { CurrentChallangeComponent } from "./challanges/current-challange/current-challange.component";
import { ChallangeEditComponent } from "./challanges/challange-edit/challange-edit.component";

const routes: Routes = [
    { path: "", component: AuthComponent, pathMatch: "full" },
    { path: "today", component: TodayComponent },
    { path: "current-challange", component: CurrentChallangeComponent },
    { path: "edit-challange", component: ChallangeEditComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
