import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import {AppService} from "../app.service";
import {AuthService} from "../auth/auth.service";

@Injectable()
export class SearchItemsService {
  filters = {};
  itemsChanged = new Subject<any>();

  paginationChanged = new Subject<any>();
  filterChanged = new Subject<any>();

  private localItems = [];
  constructor(private http: Http, private appService:AppService, private authService: AuthService) {
  }
  getItems(params){
    params.service = 'SearchAmazon';
    /*No define imempage*/
    if(params.itemPage == null){
      params.itemPage = '1';
    }
    else{
      const filter = JSON.parse(localStorage.getItem("filters"));
      params.sort = filter.sort;
      params.searchIndex = filter.searchIndex;
      params.keywords = filter.keywords;
    }
    console.log(params);
    localStorage.setItem("filters", JSON.stringify(params));
    this.filters = params;
    console.log(params);
    /*let requestOptions = new RequestOptions();
    requestOptions.search = params;
    */
    /*TODO condition for token*/
    let myHeaders = new Headers();
    myHeaders.set('Content-Type', 'application/json');
    myHeaders.set('Accept', 'application/json');
    if(this.authService.isAuthenticated()){
      const token = this.authService.getToke();
      myHeaders.set('Authorization', token);
    }
    let options = new RequestOptions({ headers: myHeaders, params: params });

    return this.http.get(this.appService.getServerDomain()+'/api/search', options).subscribe(
        (response: Response) => {
          const items = response.json();
          this.localItems = items.rows;
          this.itemsChanged.next(this.localItems.slice());
          this.paginationChanged.next(items.totalPages);
          this.filterChanged.next(params);
        }
    );
  }
  getLocalItems(){
    return this.localItems.slice();
  }
}
