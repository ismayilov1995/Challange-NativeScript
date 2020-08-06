import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "@nativescript/angular/router";
import { Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";

const routes: Routes = [
    { path: "", component: AuthComponent, pathMatch: "full" },
    {
        path: "challenges",
        loadChildren: () =>
            import("./challanges/challenges.module").then(
                (mod) => mod.ChallangesModule
            ),
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
