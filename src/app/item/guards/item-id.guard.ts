import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemIdGuard implements CanActivate {
  constructor( 
    private router: Router 
  ){}

  canActivate( route: ActivatedRouteSnapshot ): boolean {
    let itemId = route.params['id'];

    if ( !itemId || Number.isNaN(Number(itemId)) ){
      this.router.navigate(['/items'])
      return false
    }
      
    return true;
  }
  
}
