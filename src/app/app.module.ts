import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule, NativeScriptFormsModule } from "@nativescript/angular";

import { AppComponent } from "./app.component";
import { CurrentChallangeComponent } from "./challanges/current-challange/current-challange.component";
import { StackComponent } from './layouts/stack/stack.component';

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [AppComponent],
    imports: [NativeScriptModule, NativeScriptFormsModule],
    declarations: [AppComponent, CurrentChallangeComponent, StackComponent],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
