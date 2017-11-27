import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  constructor() { }
  getServerDomain(){
    return 'https://amazon-advertisement.herokuapp.com';
  }
}
