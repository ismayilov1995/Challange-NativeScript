import { Component, OnInit } from '@angular/core';
import { PageRoute, RouterExtensions } from 'nativescript-angular/router';
import { ChallengeService } from '../challenge.service';

@Component({
  selector: 'ns-manage-challenge',
  templateUrl: './manage-challenge.component.html',
  styleUrls: ['./manage-challenge.component.css']
})
export class ManageChallengeComponent implements OnInit {
    isCreating = true;

    constructor(
        private pageRoute: PageRoute,
        private router: RouterExtensions,
        private challengeService: ChallengeService
    ) {}

    ngOnInit(): void {
        this.pageRoute.activatedRoute.subscribe((activatedRoute) => {
            activatedRoute.paramMap.subscribe((param) => {
                if (!param.has("mode")) {
                    this.isCreating = true;
                } else {
                    this.isCreating = param.get("mode") !== "edit";
                }
            });
        });
    }

    onBack() {
        this.router.backToPreviousPage();
    }

    onSubmit(title: string, description: string): void {
        this.challengeService.createNewChallange(title, description);
        this.router.backToPreviousPage();
    }
}
