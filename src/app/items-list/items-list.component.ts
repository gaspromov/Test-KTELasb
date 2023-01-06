import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Requests } from '../const';
import { Item } from '../item/interfaces/item';
import { ItemsService } from '../shared/store/items.service';
import { HttpService } from '../tools/services/http.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss']
})
export class ItemsListComponent implements OnInit {
  items!: Observable<Item[]>

  constructor(
    private store: ItemsService
  ) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(){
    this.items = this.store.getItems();
  }

}
