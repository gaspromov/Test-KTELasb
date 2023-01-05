import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, finalize, take, throwError } from 'rxjs';
import { Requests } from '../const';
import { HttpService } from '../tools/services/http.service';
import { Item } from './interfaces/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  item!: Item;

  loading: boolean = false;

  constructor(
    private http: HttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getItem();
  }

  getItem(){
    let itemId = this.activatedRoute.snapshot.params['id'];

    this.loading = true;
    this.http.request( Requests['getItemById'], null, itemId )
      .pipe(
        take(1),
        finalize(() => this.loading = false),
        catchError(err => {
          if ( err.status == 404 )
            this.router.navigate(['/items'])
          return throwError(err)
        })
      )
      .subscribe({
        next: i => this.item = i,
        error: e => console.log(e)
      })
  }

}
