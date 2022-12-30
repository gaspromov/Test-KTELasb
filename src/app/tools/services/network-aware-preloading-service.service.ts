import { Injectable } from '@angular/core';
import { Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkAwarePreloadingServiceService {
  
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    const connection = (<any>window).navigator.connection;

    if (connection.saveData) {
      return of(null);
    }
    
    const speed = connection.effectiveType;
    const slowConnections = ['slow-2g', '2g', '3g'];
    if (slowConnections.includes(speed)) {
      return of(null);
    }
    
    return load();
  }
}
