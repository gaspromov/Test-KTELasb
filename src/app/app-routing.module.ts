import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NetworkAwarePreloadingServiceService } from './tools/services/network-aware-preloading-service.service';

const routes: Routes = [
  { path: 'items', loadChildren: () => import('./items-list/items-list.module').then(m => m.ItemsListModule) },
  { path: 'items/:id', loadChildren: () => import('./item/item.module').then(m => m.ItemModule) },
  { path: 'create', loadChildren: () => import('./item-form/item-form.module').then(m => m.ItemFormModule) },
  { path: '**', redirectTo: '/items' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NetworkAwarePreloadingServiceService })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
