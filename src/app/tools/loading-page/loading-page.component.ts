import { Component, OnInit, OnDestroy } from '@angular/core';
import {LoadingPageService} from './loading-page.service';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css']
})
export class LoadingPageComponent implements OnInit, OnDestroy {
    showLoading = false;
    subscription: Subscription;
  constructor(private loadingService: LoadingPageService) { }

  ngOnInit() {
    this.loadingService.getComponent().subscribe(
        (params: any) => {
          console.log('holis');
          this.showLoading = params;
        }
    );
  }
  ngOnDestroy() {
  //  this.subscription.unsubscribe();
  }


}
