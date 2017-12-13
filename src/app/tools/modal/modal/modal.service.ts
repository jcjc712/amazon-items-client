import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ModalService {
    // Observable string sources
    private componentMethodCallSource = new Subject<any>();
    private responseMethod = new Subject<any>();

    callComponentMethod(params: any): Observable<any> {
        this.componentMethodCallSource.next(params);
        return this.responseMethod.asObservable();
    }

    getComponent(): Observable<any> {
        return this.componentMethodCallSource.asObservable();
    }
    callResponse(params: any) {
        this.responseMethod.next(params);
    }
/*    getResponse(): Observable<any> {
        return this.responseMethod.asObservable();
    }
*/
}
