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
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {AuthService} from "./auth/auth.service";
import { ActivationComponent } from './activation/activation.component';
/*Loading page*/
import { LoadingPageComponent } from './tools/loading-page/loading-page.component';
import {LoadingPageService} from './tools/loading-page/loading-page.service';
/*Alert*/
import { AlertComponent } from './tools/toaster/_directives/index';
import { AlertService } from './tools/toaster/_services/index';
/*Modals*/
import { ModalComponent } from './tools/modal/modal/modal.component';
import {ModalService} from './tools/modal/modal/modal.service';
/*General Modal*/
import { GeneralModalComponent } from './tools/general-modal/general-modal.component';
import {GeneralModalService} from './tools/general-modal/general-modal.service';
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
    ItemComponent,
    SignupComponent,
    SigninComponent,
    ActivationComponent,
    LoadingPageComponent,
    AlertComponent,
    ModalComponent,
    GeneralModalComponent,
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
    AppService,
      AuthService,
    AlertService,
    ModalService,
    GeneralModalService,
    LoadingPageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
