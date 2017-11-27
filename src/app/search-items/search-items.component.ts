import {Component, OnDestroy, OnInit} from '@angular/core';
import {SearchItemsService} from "./search-items.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
  styleUrls: ['./search-items.component.css']
})
export class SearchItemsComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  constructor(private serviceItems:SearchItemsService) { }
  public pageId = 1;
  public totalPages = [];
  ngOnInit() {
    this.subscription = this.serviceItems.paginationChanged.subscribe(
        (totalPages)=>{
          if(totalPages > 10 ){
            totalPages = 10;
          }
          this.totalPages = Array(totalPages).fill(0).map((x,i)=>i+1);
        }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  filterItems(page){
    this.pageId = page;
    const params = {
      itemPage: page
    }
    this.serviceItems.getItems(params);
  }

}
