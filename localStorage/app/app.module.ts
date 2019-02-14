import { C2Component } from './c2/c2.component';
import { RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';

var obj = [
  {path:"c1" ,  component:C1Component},
  {path:"c2", component:C2Component}
]

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(obj), FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
