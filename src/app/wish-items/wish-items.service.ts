import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import {Subject} from "rxjs/Subject";
import {AppService} from "../app.service";
@Injectable()
export class WishItemsService {

  private localItems = [];
  itemsChanged = new Subject<any>();
  constructor(private http: Http, private appService:AppService) {
  }

  getItems(){
    /*TODO set token*/
    return this.http.get(this.appService.getServerDomain()+'/api/wishlist').subscribe(
        (response: Response) => {
          const items = response.json();
          this.localItems = items.rows;
          this.itemsChanged.next(this.localItems.slice());
          console.log(items.rows);
        }
    );
  }
  getLocalItems(){
    return this.localItems.slice();
  }

  getItem(id){
      return this.http.get(this.appService.getServerDomain()+'/api/wishlist/'+id);
  }

  attachOrDetach(item){
      let action = 'attach';
      let flagFollow = 1;
      if(item.follow == 1){
          action = 'detach';
          flagFollow = 0;
      }
      let params = {
          item:[item.asin],
          action:action,
      };
      return this.http.post(this.appService.getServerDomain()+'/api/wishlist', params).subscribe(
          (response: Response) => {
              item.follow = flagFollow;
                if(action == 'detach'){
                    /*Delete localitem*/
                    let specificItem = this.localItems.find((localItem) => {
                        return localItem.asin === item.asin;
                    });
                    this.localItems.splice(this.localItems.indexOf(specificItem), 1);
                    this.itemsChanged.next(this.localItems.slice());
                }
          }
      );
  }

}
