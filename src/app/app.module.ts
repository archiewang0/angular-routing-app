import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AppRoutingModule } from './app.routing';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate.guard.';
import { ServerResolver } from './servers/server/server.resolver';

// 路徑會成為 localhost:4200/users
// 搬移到 app-routing.module config檔案
// const appRoutes: Routes = [
//     { path: '', component: HomeComponent },
//     {
//         path: 'users',
//         component: UsersComponent,
//         children: [{ path: ':id/:name', component: UserComponent }],
//     },
//     // { path: 'users/:id/:name', component: UserComponent },
//     {
//         path: 'servers',
//         component: ServersComponent,
//         children: [
//             { path: ':id', component: ServerComponent },
//             { path: ':id/edit', component: EditServerComponent },
//         ],
//     },
//     { path: 'not-found', component: PageNotFoundComponent },
//     { path: '**', redirectTo: '/not-found' },
// ];

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        UsersComponent,
        ServersComponent,
        UserComponent,
        EditServerComponent,
        ServerComponent,
    ],
    imports: [BrowserModule, FormsModule, AppRoutingModule],
    providers: [
        ServersService,
        AuthService,
        AuthGuard,
        CanDeactivateGuard,
        ServerResolver,
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
