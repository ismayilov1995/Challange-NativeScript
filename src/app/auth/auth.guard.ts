import { Injectable } from "@angular/core";
import { CanLoad, Route } from "@angular/router";
import { AuthService } from "./auth.service";
import { take, switchMap, tap } from "rxjs/operators";
import { of } from "rxjs";
import { RouterExtensions } from "nativescript-angular/router";

@Injectable()
export class AuthGuard implements CanLoad {
    constructor(
        private authService: AuthService,
        private router: RouterExtensions
    ) {}

    canLoad(route: Route) {
        return this.authService.user.pipe(
            take(1),
            switchMap((user) => {
                if (!user || !user.token) {
                    return this.authService.autoLogin();
                }
                return of(true);
            }),
            tap((isAuth) => {
                if (!isAuth) {
                    this.router.navigate(["/auth"], { clearHistory: true });
                }
            })
        );
    }
}
