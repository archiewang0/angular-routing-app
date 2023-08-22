import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate.guard.';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'users',
        component: UsersComponent,
        children: [{ path: ':id/:name', component: UserComponent }],
    },
    // { path: 'users/:id/:name', component: UserComponent },
    {
        path: 'servers',
        component: ServersComponent,
        canActivateChild: [AuthGuard],
        canActivate: [AuthGuard],
        children: [
            { path: ':id', component: ServerComponent },
            {
                path: ':id/edit',
                canDeactivate: [CanDeactivateGuard],
                component: EditServerComponent,
            },
        ],
    },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found' },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
