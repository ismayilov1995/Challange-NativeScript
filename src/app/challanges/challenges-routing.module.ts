import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { ChallangeTabsComponent } from "./challange-tabs/challange-tabs.component";
import { TodayComponent } from "./today/today.component";
import { CurrentChallangeComponent } from "./current-challange/current-challange.component";

const routes: Routes = [
    {
        path: "tabs",
        component: ChallangeTabsComponent,
        children: [
            { path: "today", component: TodayComponent, outlet: "today" },
            {
                path: "current-challenge",
                component: CurrentChallangeComponent,
                outlet: "currentChallenge",
            },
        ],
    },
    {
        path: ":mode",
        loadChildren: () =>
            import("./challange-edit/challenge-edit.module").then(
                (mod) => mod.ChallengeEditModule
            ),
    },
    { path: "", redirectTo: "/challenges/tabs", pathMatch: "full" },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule],
})
export class ChallengesRoutingModule {}
