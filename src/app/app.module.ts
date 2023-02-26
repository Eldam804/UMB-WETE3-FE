import
{ NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { UserPageComponent } from './user/user-page/user-page.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterOutlet} from "@angular/router";
import {BookPageComponent} from "./book/book-page/book-page.component";
import { BorrowingsPageComponent } from './borrowings/borrowings-page/borrowings-page.component';
import { GenrePageComponent } from './genre/genre-page/genre-page.component';
@NgModule({
  declarations: [
      AppComponent,
      UserPageComponent,
      BookPageComponent,
      BorrowingsPageComponent,
      GenrePageComponent
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
