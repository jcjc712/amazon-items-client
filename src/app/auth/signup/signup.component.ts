import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../auth.service";
import {LoadingPageService} from "../../tools/loading-page/loading-page.service";
import {GeneralModalService} from "../../tools/general-modal/general-modal.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    public errors;
  constructor(private authService: AuthService,
              private loadingPage: LoadingPageService,
              private generalModal: GeneralModalService) { }

  ngOnInit() {
  }

  onSignup(form: NgForm){
      this.errors = '';
      /*Loading page*/
      this.loadingPage.callComponentMethod(true);
    this.authService.signup(form.value.username, form.value.email, form.value.password).subscribe(
        (response) => {
            this.loadingPage.callComponentMethod(false);
            form.reset();
            this.generalModal.callComponentMethod({
                title: 'Estas a un paso de finalizar!',
                body: 'En este momento te hemos mandado un correo electrónico para activar tu cuenta'
            });
          console.log(response);
        },
        (error) => {
            this.loadingPage.callComponentMethod(false);
            this.generalModal.callComponentMethod({
                title: 'Error',
                body: 'Error faltal ya se murio todo ya! Corre, alv!!!!'
            });
          this.errors = error.json().errors;
           console.log(this.errors.email);
        }
    );
  }

}
