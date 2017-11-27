import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {WishItemsService} from "../wish-items.service";
import {Response} from "@angular/http";
@Component({
  selector: 'app-wish-detail',
  templateUrl: './wish-detail.component.html',
  styleUrls: ['./wish-detail.component.css']
})
export class WishDetailComponent implements OnInit {
  item: any;
  id: number;
  constructor(private wishService: WishItemsService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    this.route.params.subscribe(
        (params: Params) => {
          this.id = +params["id"];
          this.item = this.wishService.getItem(this.id).subscribe(
              (response: Response) => {
                const items = response.json();
                this.item = items.row;
              }
          );
        }
    );
  }

}
