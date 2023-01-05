import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { ItemsListComponent } from './items-list.component';
import { ItemComponent } from './components/item/item.component';
import { Route, RouterModule } from '@angular/router';
import { ItemsListService } from './services/items-list.service';

const route: Route = {
  path: '',
  component: ItemsListComponent
}

@NgModule({
  declarations: [
    ItemsListComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    ScrollingModule,
    RouterModule.forChild([route])
  ],
  providers: [ItemsListService]
})
export class ItemsListModule { }
