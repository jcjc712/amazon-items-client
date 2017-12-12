import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.css']
})
export class ActivationComponent implements OnInit {

  activationToken: string;
  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) { }


  ngOnInit() {
    this.route.params.subscribe(
        (params: Params) => {
          this.activationToken = params["token"];
            this.authService.activation(this.activationToken).subscribe(
                (response) => {
                  console.log(response);
                  this.router.navigate(["/"]);
                },
                (error) => {
                  console.log(error);
                }
            );
        }
    );
  }

}
