import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  constructor() { }
  getServerDomain(){
    return 'http://amazonwishlist.dev';
  }
}
