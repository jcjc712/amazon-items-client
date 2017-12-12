import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";

@Injectable()
export class AppService {
  constructor() { }
  getServerDomain(){
    return environment.backendDomain;
  }
  getClientSecret(){
    return environment.clientSecret;
  }
}
