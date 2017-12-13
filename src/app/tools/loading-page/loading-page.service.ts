import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class LoadingPageService {
    private componentMethodCallSource = new Subject<any>();
    constructor() { }
    callComponentMethod(params: any): void {
      console.log(params);
        this.componentMethodCallSource.next(params);
    }

    getComponent(): Observable<any> {
        return this.componentMethodCallSource.asObservable();
    }
}
