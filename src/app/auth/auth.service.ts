import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap, catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { alert } from "tns-core-modules/ui/dialogs";

const FIREBASE_API = "AIzaSyDpzC8ApalwDibZv4BOSgmjSJg0bvi16ag";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    private url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API}`;
    private loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API}`;

    constructor(private http: HttpClient) {}

    login(email: string, password: string) {
        return this.http
            .post(this.loginUrl, {
                email,
                password,
                returnSecureToken: "true",
            })
            .pipe(
                catchError((errorRes) => {
                    this.handleError(errorRes.error.error.message);
                    return throwError(errorRes);
                })
            );
    }

    signup(email: string, password: string) {
        return this.http
            .post(this.url, {
                email,
                password,
                returnSecureToken: "true",
            })
            .pipe(
                catchError((errorRes) => {
                    this.handleError(errorRes.error.error.message);
                    return throwError(errorRes);
                })
            );
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
