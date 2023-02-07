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
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      projectTitle: new FormControl()
    })
  }
  changeProjectTitle(title: string): void {
    this.title = title;
  }

}
