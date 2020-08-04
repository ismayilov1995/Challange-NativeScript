import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html",
})
export class AppComponent {
    enteredChallange = "";

    onChallangeInput(challangeDesc: string) {
        this.enteredChallange = challangeDesc;
    }
}
