import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit, OnDestroy {
    user: { id: number; name: string };
    paramsSubscription: Subscription;
    // 該型別是 Subscription 主要存取 observarble 的變數
    // 放在這裡的原因是 該component destroy的話可以藉由 field unsubscribe, 避免效能占用

    constructor(private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        this.user = {
            id: this.route.snapshot.params['id'],
            name: this.route.snapshot.params['name'],
        };
        console.log('檢查 user: ', this.user);
        console.log('檢查 route: ', this.route);
        this.paramsSubscription = this.route.params.subscribe(
            (params: Params) => {
                console.log('檢查 Params: ', params);
                this.user.id = params['id'];
                this.user.name = params['name'];
            }
        );

        // setTimeout(() => {
        //     this.router.navigate(['/users', 11, 'Archie']);
        // }, 3000);
    }

    ngOnDestroy(): void {
        this.paramsSubscription.unsubscribe();
    }
}
