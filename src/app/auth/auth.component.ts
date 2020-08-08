import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "@nativescript/angular";
import {
    FormGroup,
    FormControl,
    Validators,
    AbstractControl,
} from "@angular/forms";

@Component({
    selector: "ns-auth",
    templateUrl: "./auth.component.html",
    styleUrls: ["./auth.component.css"],
})
export class AuthComponent implements OnInit {
    form: FormGroup;

    constructor(private router: RouterExtensions) {}

    ngOnInit(): void {
        this.form = new FormGroup({
            email: new FormControl(null, {
                updateOn: "blur",
                validators: [Validators.required, Validators.email],
            }),
            password: new FormControl(null, {
                updateOn: "blur",
                validators: [Validators.required, Validators.minLength(6)],
            }),
        });
    }

    onSignin(): void {
        this.router.navigate(["/today"], { clearHistory: true });
    }

    get f(): any {
        return this.form.controls;
    }
}
