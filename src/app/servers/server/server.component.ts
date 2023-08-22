import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
    server: { id: number; name: string; status: string };

    constructor(
        private serversService: ServersService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        // 取出 queryParams 的ID
        const id = +this.route.snapshot.params['id'];
        // console.log('查看 queryParmas: ', this.route.snapshot.queryParams);
        // console.log('查看 queryParmas: ', this.route.snapshot.params);
        // console.log('查看 queryParmas: ', this.route.snapshot.fragment);

        // alert('id: ' + id);
        this.server = this.serversService.getServer(id);

        // console.log(this.server);

        // 註冊事件 監聽Params 是否資料有無改變
        // 如果改變的話 會觸發事件發生
        this.route.params.subscribe((params: Params) => {
            // console.log('check Params: ', params);
            this.server = this.serversService.getServer(+params['id']);

            // console.log('check this.server: ', this.server);
        });
    }

    onReload() {
        // this.router.navigate(['servers', this.server.id, 'edit'], {
        //     relativeTo: this.route,
        // });

        this.router.navigate(['edit'], {
            relativeTo: this.route,
            queryParamsHandling: 'preserve',
        });
    }
}
