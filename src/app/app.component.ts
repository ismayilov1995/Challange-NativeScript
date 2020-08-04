import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html",
})
export class AppComponent {
    challangeTitle: string;

    onChallangeInput(challangeDesc: string) {
        this.challangeTitle = challangeDesc;
    }
}
