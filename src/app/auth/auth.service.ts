import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";

const FIREBASE_API = "AIzaSyDpzC8ApalwDibZv4BOSgmjSJg0bvi16ag";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    private url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API}`;
    private loginUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API}`;

    constructor(private http: HttpClient) {}

    login(email: string, password: string) {
        return this.http.post(this.loginUrl, {
            email,
            password,
            returnSecureToken: "true",
        });
    }

    signup(email: string, password: string) {
        return this.http.post(this.url, {
            email,
            password,
            returnSecureToken: "true",
        });
    }
}
