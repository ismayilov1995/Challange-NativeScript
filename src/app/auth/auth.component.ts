import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector: "ns-auth",
    templateUrl: "./auth.component.html",
    styleUrls: ["./auth.component.css"],
})
export class AuthComponent implements OnInit {
    form: FormGroup;
    isLogin = true;

    constructor(private router: RouterExtensions) {}

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
        if (this.form.valid) return;
        if (this.isLogin) {
            this.form.reset();
            this.router.navigate(["/challenges"], { clearHistory: true });
        } else {
            console.log("Registration");
            this.router.navigate(["/challenges"], { clearHistory: true });
        }
    }

    onSwitch(): void {
        this.isLogin = !this.isLogin;
    }

    get f() {
        return this.form.controls;
    }
}
