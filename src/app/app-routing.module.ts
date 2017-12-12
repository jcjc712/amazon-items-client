import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { SearchItemsComponent } from './search-items/search-items.component';
import { WishItemsComponent } from './wish-items/wish-items.component';
import { WishListComponent } from './wish-items/wish-list/wish-list.component';
import { WishDetailComponent } from './wish-items/wish-detail/wish-detail.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ActivationComponent } from './activation/activation.component';
import { AuthGuard } from "./auth/auth-guard.service";
const appRoutes: Routes = [
    {   path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {   path: 'signup',
        component: SignupComponent,
    },
    {   path: 'activation/:token',
        component: ActivationComponent,
    },
    {   path: 'signin',
        component: SigninComponent,
    },
    {   path: 'wishlist', component: WishItemsComponent, canActivate:[ AuthGuard ], children: [
        {   path: '', component: WishListComponent },
        {   path: ':id', component: WishDetailComponent},
    ] },
    {   path: 'search',
        component: SearchItemsComponent,
        pathMatch: 'full'},
    {   path: '**', component: PageNotFoundComponent }
];
@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ],
    providers: [AuthGuard]
})
export class AppRoutingModule {

}