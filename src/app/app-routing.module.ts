import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { SearchItemsComponent } from './search-items/search-items.component';
import { WishItemsComponent } from './wish-items/wish-items.component';
import { WishListComponent } from './wish-items/wish-list/wish-list.component';
import { WishDetailComponent } from './wish-items/wish-detail/wish-detail.component';
const appRoutes: Routes = [
    {   path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {   path: 'wishlist', component: WishItemsComponent, children: [
        {   path: '', component: WishListComponent},
        {   path: ':id', component: WishDetailComponent},
    ] },
    {   path: 'search',
        component: SearchItemsComponent,
        pathMatch: 'full'},
    {   path: '**', component: PageNotFoundComponent }
];
@NgModule({
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}