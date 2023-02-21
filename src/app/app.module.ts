import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserPageComponent } from './user/user-page/user-page.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [
      AppComponent,
      UserPageComponent,
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    RouterOutlet
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
