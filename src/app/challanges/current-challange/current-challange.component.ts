import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { ModalDialogService } from "nativescript-angular/common";
import { DayModalComponent } from "../day-modal/day-modal.component";
import { UIService } from "~/app/shared/ui/ui.service";

@Component({
    selector: "ns-current-challange",
    templateUrl: "current-challange.component.html",
    styleUrls: [
        'current-challenge.component.common.css',
        'current-challenge.component.css'
      ],
})
export class CurrentChallangeComponent implements OnInit {
    constructor(
        private uiService: UIService,
        private vcRef: ViewContainerRef,
        private modalDialog: ModalDialogService
    ) {}

    ngOnInit() {}

    onChangeStatus() {
        this.modalDialog
            .showModal(DayModalComponent, {
                fullscreen: true,
                viewContainerRef: this.uiService.getRootVCRef()
                    ? this.uiService.getRootVCRef()
                    : this.vcRef,
                context: { date: new Date() },
            })
            .then((res: string) => {
                console.log(res);
            });
    }
}
