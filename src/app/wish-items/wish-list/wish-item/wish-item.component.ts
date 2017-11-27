import { Component, OnInit, Input } from '@angular/core';
import {WishItemsService} from "../../wish-items.service";

@Component({
  selector: 'app-wish-item',
  templateUrl: './wish-item.component.html',
  styleUrls: ['./wish-item.component.css']
})
export class WishItemComponent implements OnInit {
  @Input() item;
  constructor(private wishItem:WishItemsService) { }

  ngOnInit() {
  }

  attachOrDetach(item){
    this.wishItem.attachOrDetach(item);
  }

}
