import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "@nativescript/angular/router";
import { Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { TodayComponent } from "./challanges/today/today.component";
import { CurrentChallangeComponent } from "./challanges/current-challange/current-challange.component";
import { ChallangeEditComponent } from "./challanges/challange-edit/challange-edit.component";
import { ChallangeTabsComponent } from "./challanges/challange-tabs/challange-tabs.component";

const routes: Routes = [
    { path: "", component: AuthComponent, pathMatch: "full" },
    { path: "edit-challange", component: ChallangeEditComponent },
    {
        path: "challanges",
        component: ChallangeTabsComponent,
        children: [
            { path: "today", component: TodayComponent, outlet: "today" },
            {
                path: "current-challange",
                component: CurrentChallangeComponent,
                outlet: "currentChallange",
            },
        ],
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
