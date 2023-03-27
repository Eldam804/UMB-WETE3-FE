import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserPageComponent} from "./user/user-page/user-page.component";
import {Routes, RouterModule, Router} from "@angular/router";
import {BookPageComponent} from "./book/book-page/book-page.component";
import {BorrowingsPageComponent} from "./borrowings/borrowings-page/borrowings-page.component";
import {GenrePageComponent} from "./genre/genre-page/genre-page.component";
import {LoginPageComponent} from "./authentication/login-page/login-page.component";
import {AuthGuard} from "./authentication/guard/auth.guard";

const router: Routes = [{
  path: "user",
  canActivate: [AuthGuard],
  component: UserPageComponent,
},
  {
    path: "login",
    component: LoginPageComponent
  },
  {
    path: "books",
    canActivate: [AuthGuard],
    component: BookPageComponent,
  },
  {
    path: "borrowings",
    canActivate: [AuthGuard],
    component: BorrowingsPageComponent,
  },
  {
    path:"genre",
    canActivate: [AuthGuard],
    component: GenrePageComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(router)

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
