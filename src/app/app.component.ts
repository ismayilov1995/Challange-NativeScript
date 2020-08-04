import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    templateUrl: "./app.component.html",
})
export class AppComponent {
    challanges: string[] = [];

    onChallangeInput(challangeDesc: string) {
        this.challanges.push(challangeDesc);
    }
}
