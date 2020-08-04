import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import {
    NativeScriptModule,
    NativeScriptFormsModule,
} from "@nativescript/angular";

import { AppComponent } from "./app.component";
import { CurrentChallangeComponent } from "./challanges/current-challange/current-challange.component";
import { ChallangeEditComponent } from "./challanges/challange-edit/challange-edit.component";
import { StackComponent } from "./layouts/stack/stack.component";
import { FlexboxComponent } from "./layouts/flexbox/flexbox.component";
import { GridComponent } from "./layouts/grid/grid.component";
import { AbsoluteComponent } from "./layouts/absolute/absolute.component";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

@NgModule({
    bootstrap: [AppComponent],
    imports: [NativeScriptModule, NativeScriptFormsModule],
    declarations: [
        AppComponent,
        CurrentChallangeComponent,
        ChallangeEditComponent,
        StackComponent,
        FlexboxComponent,
        GridComponent,
        AbsoluteComponent,
    ],
    providers: [],
    schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
