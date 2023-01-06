import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { ItemsListComponent } from './items-list.component';
import { ItemComponent } from './components/item/item.component';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

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
    RouterModule.forChild([route]),
    MatButtonModule
  ]
})
export class ItemsListModule { }
