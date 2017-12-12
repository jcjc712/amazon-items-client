import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignin(params: NgForm){
    this.authService.signin(params.value.email, params.value.password).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
    );
  }

}
