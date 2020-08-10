import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { AuthService } from "./auth.service";
import { Subscription } from "rxjs";
import { Observable } from "tns-core-modules/ui/page";

@Component({
    selector: "ns-auth",
    templateUrl: "./auth.component.html",
    styleUrls: ["./auth.component.css"],
})
export class AuthComponent implements OnInit {
    form: FormGroup;
    isLogin = true;
    isLoading = false;

    constructor(
        private router: RouterExtensions,
        private authservice: AuthService
    ) {}

    ngOnInit(): void {
        this.form = new FormGroup({
            email: new FormControl(null, {
                updateOn: "blur",
                validators: [Validators.required, Validators.email],
            }),
            password: new FormControl(null, {
                validators: [Validators.required, Validators.minLength(6)],
            }),
        });
    }

    onSubmit(): void {
        if (this.form.invalid) return;
        this.isLoading = true;
        if (this.isLogin) {
            this.authservice
                .login(
                    this.form.get("email").value,
                    this.form.get("password").value
                )
                .subscribe(
                    (res) => {
                        this.isLoading = false;
                        this.router.navigate(["/challenges"], {
                            clearHistory: true,
                        });
                    },
                    (error) => {
                        this.isLoading = false;
                    }
                );
        } else {
            this.authservice
                .signup(
                    this.form.get("email").value,
                    this.form.get("password").value
                )
                .subscribe(
                    (res) => {
                        this.isLoading = false;
                        this.router.navigate(["/challenges"], {
                            clearHistory: true,
                        });
                    },
                    (error) => {
                        this.isLoading = false;
                    }
                );
        }
    }

    onSwitch(): void {
        this.isLogin = !this.isLogin;
    }

    get f() {
        return this.form.controls;
    }
}
