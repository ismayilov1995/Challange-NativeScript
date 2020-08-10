import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap, catchError } from "rxjs/operators";
import { throwError, BehaviorSubject } from "rxjs";
import { alert } from "tns-core-modules/ui/dialogs";
import { User } from "./User.model";
import { RouterExtensions } from "nativescript-angular/router";

const FIREBASE_API = "AIzaSyDpzC8ApalwDibZv4BOSgmjSJg0bvi16ag";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    private url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API}`;
    private loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API}`;
    private _user = new BehaviorSubject<User>(null);

    constructor(private http: HttpClient, private router: RouterExtensions) {}

    get user() {
        return this._user.asObservable();
    }

    login(email: string, password: string) {
        return this.http
            .post<AuthResponse>(this.loginUrl, {
                email,
                password,
                returnSecureToken: "true",
            })
            .pipe(
                catchError((errorRes) => {
                    this.handleError(errorRes.error.error.message);
                    return throwError(errorRes);
                }),
                tap((res) => {
                    if (res && res.idToken) {
                        this.handleLogin(
                            res.email,
                            res.localId,
                            res.idToken,
                            parseInt(res.expiresIn)
                        );
                    }
                })
            );
    }

    signup(email: string, password: string) {
        return this.http
            .post<AuthResponse>(this.url, {
                email,
                password,
                returnSecureToken: "true",
            })
            .pipe(
                catchError((errorRes) => {
                    this.handleError(errorRes.error.error.message);
                    return throwError(errorRes);
                }),
                tap((res) => {
                    if (res && res.idToken) {
                        this.handleLogin(
                            res.email,
                            res.localId,
                            res.idToken,
                            parseInt(res.expiresIn)
                        );
                    }
                })
            );
    }

    logout() {
        this._user.next(null);
        this.router.navigate(["/"], { clearHistory: true });
    }

    private handleLogin(
        email: string,
        userId: string,
        token: string,
        expiresIn: number
    ) {
        const expDate = new Date(new Date().getDate() + expiresIn * 1000);
        const user = new User(email, userId, token, expDate);
        this._user.next(user);
    }

    private handleError(errorMessage: string) {
        switch (errorMessage) {
            case "EMAIL_EXISTS":
                alert("Email used already");
                break;
            case "EMAIL_NOT_FOUND":
                alert("Email not found");
                break;
            case "INVALID_PASSWORD":
                alert("Password incorrect");
                break;
            default:
                alert("We got an error");
                break;
        }
    }
}

interface AuthResponse {
    kind: string;
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
}
