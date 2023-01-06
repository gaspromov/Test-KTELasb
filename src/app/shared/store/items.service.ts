import { Injectable } from '@angular/core';
import { catchError, Observable, of, ReplaySubject, take, tap, throwError } from 'rxjs';
import { Requests } from 'src/app/const';
import { Item } from 'src/app/item/interfaces/item';
import { HttpService } from 'src/app/tools/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private items!: Item[]
  private $items = new ReplaySubject<Item[]>();

  constructor(
    private http: HttpService
  ) { }

  public getItems(){
    this.fetchItems();
    return this.$items;
  }

  public getItemById( id: string|number ){
    if ( this.items && this.items.find(i => i.id == id) )
      return of(this.items.find(i => i.id == id))

    return this.http.request( Requests['getItemById'], null, String(id) )
      .pipe(
        tap(d => {
          if ( this.items )
            this.items.push(d);
        })
      )
  }


  public addItem( data: Item ){
    if ( !this.items ) return
    this.items.push(data);
  }


  private fetchItems(){
    (this.http.request( Requests['getItems'] ) as Observable<Item[]>)
      .pipe(
        take(1),
        tap(d => {
          this.items = d;
          this.$items.next(d)
        }),
        catchError(e => {
          this.$items.error(e);
          this.$items = new ReplaySubject();
          return throwError(e)
        })
      )
      .subscribe({
        error: () => {}
      })
  }

}
