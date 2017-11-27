import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchItemsComponent } from './search-items/search-items.component';
import { SearchFiltersComponent } from './search-items/search-filters/search-filters.component';
import { SearchListComponent } from './search-items/search-list/search-list.component';
import { SearchItemComponent } from './search-items/search-list/search-item/search-item.component';
import { WishItemsComponent } from './wish-items/wish-items.component';
import { WishListComponent } from './wish-items/wish-list/wish-list.component';
import { WishItemComponent } from './wish-items/wish-list/wish-item/wish-item.component';
import { WishDetailComponent } from './wish-items/wish-detail/wish-detail.component';
import { ItemComponent } from './shared/item/item.component';
/*Services*/
import { SearchFiltersService } from './search-items/search-filters/search-filters.service';
import { SearchItemsService } from './search-items/search-items.service';
import { WishItemsService } from './wish-items/wish-items.service';
import { AppService } from './app.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    SearchItemsComponent,
    SearchFiltersComponent,
    SearchListComponent,
    SearchItemComponent,
    WishItemsComponent,
    WishListComponent,
    WishItemComponent,
    WishDetailComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [
    SearchFiltersService,
    SearchItemsService,
    WishItemsService,
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
