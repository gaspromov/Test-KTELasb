import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize, take } from 'rxjs';
import { Requests } from '../const';
import { Item } from '../item/interfaces/item';
import { ItemsService } from '../shared/store/items.service';
import { HttpService } from '../tools/services/http.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {
  form!: FormGroup
  loading: boolean = false;

  constructor(
    private http: HttpService,
    private router: Router,
    private store: ItemsService
  ) { }

  ngOnInit(): void {
    this.generateForm()
  }

  generateForm(){
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      qty: new FormControl(null, Validators.required),
      price: new FormControl(null, Validators.required),
      currency: new FormControl('USD', Validators.required),
      article: new FormControl('ar#', Validators.required)
    })

    this.form.valueChanges.subscribe(res => console.log(res))
  }

  onCreate(){
    if ( this.form.invalid ) return;

    this.loading = true;

    this.http.request( Requests['postItem'], this.form.value )
      .pipe(take(1), finalize(() => this.loading = false))
      .subscribe({
        next: (d: Item) => {
          this.store.addItem( d );
          this.router.navigate( ['/items', d.id] )
        },
        error: err => {}
      })
  }

}
