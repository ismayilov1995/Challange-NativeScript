import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "@nativescript/angular/router";
import { Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { TodayComponent } from "./challanges/today/today.component";

const routes: Routes = [
    { path: "", component: AuthComponent, pathMatch: "full" },
    { path: "today", component: TodayComponent },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
