import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root",
})
export class AuthService {
    private url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDpzC8ApalwDibZv4BOSgmjSJg0bvi16ag";

    constructor(private http: HttpClient) {}

    login(email: string, password: string) {
        this.http.post(this.url, { email, password })
    }

    signup(email: string, password: string) {
        return this.http.post(this.url, {
            email,
            password,
            returnSecureToken: "true",
        })
    }
}
