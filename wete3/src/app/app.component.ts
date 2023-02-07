import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl:
    './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Názov projektu';
  check;
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      projectTitle: new FormControl(),
    }),
    this.check = new Array(8);
    for (let i = 0; i < this.check.length; i++) {
      this.check.push({checked: false});
    }
  }
  changeProjectTitle(title: string): void {
    this.title = title;
  }
  onChangeCheck(n :number): void{
    this.check[n].checked = !this.check[n].checked;
    console.debug(this.check);
  }
}
