import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item.component';
import { Route, RouterModule } from '@angular/router';

const route: Route = {
  path: '',
  component: ItemComponent
}

@NgModule({
  declarations: [
    ItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([route])
  ]
})
export class ItemModule { }
