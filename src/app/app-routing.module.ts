import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "@nativescript/angular/router";
import { Routes } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
    {
        path: "auth",
        loadChildren: () =>
            import("./auth/auth.module").then((mod) => mod.AuthModule),
    },
    {
        path: "challenges",
        canLoad: [AuthGuard],
        loadChildren: () =>
            import("./challanges/challenges.module").then(
                (mod) => mod.ChallangesModule
            ),
    },
    { path: "", redirectTo: "/challenges/tabs", pathMatch: "full" },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule {}
