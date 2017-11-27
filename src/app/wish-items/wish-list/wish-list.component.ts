import { Component, OnInit } from '@angular/core';
import {WishItemsService} from "../wish-items.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  private subscription: Subscription;
  public items = [];
  constructor(private wishItemsService:WishItemsService) { }

  ngOnInit() {
    this.subscription = this.wishItemsService.getItems();
    this.subscription = this.wishItemsService.itemsChanged.subscribe(
        (items)=>{
          this.items = items;
        }
    );
    /*Get items*/
    this.items = this.wishItemsService.getLocalItems();
    console.log(this.items);
  }

}
