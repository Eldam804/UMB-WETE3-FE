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
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookFormComponent } from './book/book-form/book-form.component';
import { BorrowingsFormComponent } from './borrowings/borrowings-form/borrowings-form.component';
import { BorrowingsListComponent } from './borrowings/borrowings-list/borrowings-list.component';
import { GenreFormComponent } from './genre/genre-form/genre-form.component';
import { GenreListComponent } from './genre/genre-list/genre-list.component';
import {HttpClientModule} from "@angular/common/http";
@NgModule({
  declarations: [
      AppComponent,
      UserPageComponent,
      BookPageComponent,
      BorrowingsPageComponent,
      GenrePageComponent,
      UserFormComponent,
      UserListComponent,
      BookListComponent,
      BookFormComponent,
      BorrowingsFormComponent,
      BorrowingsListComponent,
      GenreFormComponent,
      GenreListComponent
    ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    RouterOutlet,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
