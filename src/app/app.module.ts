import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';   //@ angular is a package

import { AppComponent } from './app.component';
import { ShreyasCompo1Component } from './shreyas-compo1/shreyas-compo1.component';
import { SampleCompoComponent } from './sample-compo/sample-compo.component';

@NgModule({//this is called decorator
  declarations: [
    AppComponent,
    ShreyasCompo1Component,
    SampleCompoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
