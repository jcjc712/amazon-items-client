import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {AppService} from "../../app.service";
@Injectable()
export class SearchFiltersService {

  constructor(private http: Http, private appService:AppService) {

  }
  getFilters(){
    return this.http.get(this.appService.getServerDomain()+'/api/filter');
  }

}
