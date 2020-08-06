import { Injectable, ViewContainerRef } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Observable } from "tns-core-modules/ui/page";

@Injectable({
    providedIn: "root",
})
export class UIService {
    private _drawerState = new BehaviorSubject<void>(null);
    private _rootVCRef: ViewContainerRef;

    get drawerState() {
        return this._drawerState.asObservable();
    }

    toggleDrawer() {
        this._drawerState.next(null);
    }

    setRootVCRef(vcRef: ViewContainerRef): void {
        this._rootVCRef = vcRef;
    }
    getRootVCRef(): ViewContainerRef {
        return this._rootVCRef;
    }
}
