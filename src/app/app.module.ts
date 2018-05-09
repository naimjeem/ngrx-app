import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { StoreModule } from '@ngrx/store';
import { addCoinReducer } from './blockchain/blockchain.reducer';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    BlockchainComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    StoreModule.forRoot({blockchain: addCoinReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
