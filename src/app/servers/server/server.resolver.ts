import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ServersService } from '../servers.service';
import { Injectable } from '@angular/core';

interface Server {
    id: number;
    name: string;
    status: string;
}

// 導入其他的Server 會需要使用 injectable
@Injectable()
// resolve function 會回傳 Server物件 或是 Observable Server 或是 Promise Server
export class ServerResolver implements Resolve<Server> {
    constructor(private serversService: ServersService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Server | Observable<Server> | Promise<Server> {
        console.log('resolver route: ', route);
        console.log(
            'resolver route2: ',
            this.serversService.getServer(+route.params['id'])
        );
        // resolve 地一個參數是 Route
        return this.serversService.getServer(+route.params['id']);
    }
}
