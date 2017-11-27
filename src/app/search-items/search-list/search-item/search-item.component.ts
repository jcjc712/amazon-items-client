import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import {SearchItemsService} from "../../search-items.service";
import {WishItemsService} from "../../../wish-items/wish-items.service";
@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css']
})
export class SearchItemComponent implements OnInit {
  @Input() item;
  constructor(private wishItem: WishItemsService) { }

  ngOnInit() {
  }

  attachOrDetach(item){
    this.wishItem.attachOrDetach(item);
  }

}
