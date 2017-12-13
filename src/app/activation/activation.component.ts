import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";
import {LoadingPageService} from "../tools/loading-page/loading-page.service";

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.css']
})
export class ActivationComponent implements OnInit {

  activationToken: string;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService,
              private loadingPage: LoadingPageService,) { }


  ngOnInit() {
    this.route.params.subscribe(
        (params: Params) => {
          this.activationToken = params["token"];
            /*Loading page*/
            this.loadingPage.callComponentMethod(true);
            this.authService.activation(this.activationToken).subscribe(
                (response) => {
                  console.log(response);
                  this.loadingPage.callComponentMethod(false);
                  this.router.navigate(["/"]);
                },
                (error) => {
                  console.log(error);
                  this.loadingPage.callComponentMethod(false);
                }
            );
        }
    );
  }

}
