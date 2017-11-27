import {Component, OnDestroy, OnInit} from '@angular/core';
import {SearchFiltersService} from "./search-filters.service";
import { NgForm } from '@angular/forms';
import {Subscription} from "rxjs/Subscription";
import { Response } from '@angular/http';
import {SearchItemsService} from "../search-items.service";
@Component({
  selector: 'app-search-filters',
  templateUrl: './search-filters.component.html',
  styleUrls: ['./search-filters.component.css']
})
export class SearchFiltersComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private subscriptionFilter: Subscription;
  public categories = [];
  public sorts = [];
  public searches = [];
  constructor(private serviceFilter:SearchFiltersService, private serviceItems:SearchItemsService) { }

  public sort = "";
  public searchIndex = "";
  public keyword = "";

  ngOnInit() {
    this.subscription =this.serviceFilter.getFilters().subscribe(
        (response: Response) => {
          const filters = response.json();
          this.categories = filters.categories;
          this.searches = filters.searches;
          this.sorts = filters.sorts;
        }
    );

    this.subscriptionFilter = this.serviceItems.filterChanged.subscribe(
        (params)=>{
          this.sort = params.sort;
          this.searchIndex = params.searchIndex;
          this.keyword = params.keywords;
        }
    );
  }

  filterItems(form: NgForm){
    console.log("sort:"+form.value.sort);
    const params = {
      sort: form.value.sort,
      searchIndex: form.value.category,
      keywords: form.value.keyword
    }
    this.serviceItems.getItems(params);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.subscriptionFilter.unsubscribe();
  }

}
