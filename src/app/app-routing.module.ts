import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserPageComponent} from "./user/user-page/user-page.component";
import {Routes, RouterModule, Router} from "@angular/router";
import {BookPageComponent} from "./book/book-page/book-page.component";
import {BorrowingsPageComponent} from "./borrowings/borrowings-page/borrowings-page.component";

const router: Routes = [{
  path: "user",
  component: UserPageComponent,
},
  {
    path: "books",
    component: BookPageComponent,
  },
  {
  path: "borrowings",
  component: BorrowingsPageComponent,
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
