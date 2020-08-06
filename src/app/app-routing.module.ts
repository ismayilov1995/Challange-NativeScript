import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "@nativescript/angular/router";
import { Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { TodayComponent } from "./challanges/today/today.component";
import { CurrentChallangeComponent } from "./challanges/current-challange/current-challange.component";
import { ChallangeTabsComponent } from "./challanges/challange-tabs/challange-tabs.component";

const routes: Routes = [
    { path: "", component: AuthComponent, pathMatch: "full" },
    {
        path: "challenges",
        children: [
            {
                path: "tabs",
                component: ChallangeTabsComponent,
                children: [
                    {
                        path: "today",
                        component: TodayComponent,
                        outlet: "today",
                    },
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
                    import(
                        "./challanges/challange-edit/challenge-edit.module"
                    ).then((mod) => mod.ChallengeEditModule),
            },
            { path: "", redirectTo: "/challenges/tabs", pathMatch: "full" },
        ],
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
