import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {SearchItemsService} from "../search-items.service";
import {Response} from "@angular/http";

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit, OnDestroy {
private subscription: Subscription;
  constructor(private serviceItems:SearchItemsService) { }
  public items = [];
  ngOnInit() {

    /*Start the request*/
    const params = {
      searchIndex:'Books',
      keywords:'Train',
      sort:'-price',
    };
    this.subscription = this.serviceItems.getItems(params);
    /*To listen for every change*/
      this.subscription = this.serviceItems.itemsChanged.subscribe(
          (items)=>{
            this.items = items;
          }
      );
      /*Get items*/
      this.items = this.serviceItems.getLocalItems();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
