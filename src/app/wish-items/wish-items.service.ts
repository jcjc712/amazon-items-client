import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import {Subject} from "rxjs/Subject";
import {AppService} from "../app.service";
import {AuthService} from "../auth/auth.service";
@Injectable()
export class WishItemsService {

  private localItems = [];
  //private token;
  itemsChanged = new Subject<any>();
  constructor(private http: Http, private appService:AppService, private authService:AuthService) {

  }
  getItems(){
      const token = this.authService.getToke();
      let myHeaders = new Headers();
      myHeaders.set('Content-Type', 'application/json');
      myHeaders.set('Accept', 'application/json');
      myHeaders.set('Authorization', token);
      /*let myParams = new URLSearchParams();
      myParams.set('category', 'a');*/
      //let options = new RequestOptions({ headers: myHeaders, params: myParams });

    return this.http.get(this.appService.getServerDomain()+'/api/wishlist', {
        headers: myHeaders
    }).subscribe(
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

        /*TODO condition params*/
      const token = this.authService.getToke();
      let myHeaders = new Headers();
      myHeaders.set('Content-Type', 'application/json');
      myHeaders.set('Accept', 'application/json');
      myHeaders.set('Authorization', token);
      //let options = new RequestOptions({ headers: myHeaders, params: params });

      return this.http.post(this.appService.getServerDomain()+'/api/wishlist', params,
          {headers: myHeaders}
      ).subscribe(
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
