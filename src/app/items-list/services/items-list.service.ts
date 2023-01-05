import { Injectable } from '@angular/core';
import { catchError, Observable, ReplaySubject, take, tap, throwError } from 'rxjs';
import { Requests } from 'src/app/const';
import { Item } from 'src/app/item/interfaces/item';
import { HttpService } from 'src/app/tools/services/http.service';

@Injectable()
export class ItemsListService {
  private items!: Item[]
  private $items = new ReplaySubject<Item[]>()

  constructor(
    private http: HttpService
  ) { }

  public getItems(){
    if ( !this.items )
      this.fetchItems();

    return this.$items.asObservable();
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
