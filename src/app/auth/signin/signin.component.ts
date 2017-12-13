import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {NgForm} from "@angular/forms";
import {LoadingPageService} from "../../tools/loading-page/loading-page.service";
import {AlertService} from "../../tools/toaster/_services/alert.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService,
              private loadingPage: LoadingPageService,
                private toasterService: AlertService) { }

  ngOnInit() {
  }

  onSignin(params: NgForm){
      /*Loading page*/
      this.loadingPage.callComponentMethod(true);
    this.authService.signin(params.value.email, params.value.password).subscribe(
        (response) => {
            this.loadingPage.callComponentMethod(false);
          console.log(response);
        },
        (error) => {
            this.loadingPage.callComponentMethod(false);
            this.toasterService.error(error.json().message);
          console.log(error);
        }
    );
  }

}
