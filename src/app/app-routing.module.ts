import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NetworkAwarePreloadingServiceService } from './tools/services/network-aware-preloading-service.service';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NetworkAwarePreloadingServiceService })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
