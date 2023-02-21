import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserPageComponent} from "./user/user-page/user-page.component";
import {Routes, RouterModule, Router} from "@angular/router";

const router: Routes = [{
  path: "user",
  component: UserPageComponent,

}]

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
