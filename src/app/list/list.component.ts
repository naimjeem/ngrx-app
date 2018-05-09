import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Observable } from 'rxjs/Observable';
import { Blockchain } from '../blockchain/blockchain.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  coins: Observable<Blockchain[]>;

  constructor(private store: Store<AppState>) {
   }

  ngOnInit() {
    this.coins = this.store.select(state => state.blockchain);
  }

}
