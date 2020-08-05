import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { JsonService } from './json.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { CommonModule } from "@angular/common";

import { AppComponent } from './app.component';
import { NextComponent } from './next/next.component';

@NgModule({
  declarations: [
    AppComponent,
    NextComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    CommonModule
  ],
  providers: [JsonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
