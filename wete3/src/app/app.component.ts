import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl:
    './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      name: new FormControl(),
      surname: new FormControl()
    });
  }
  savePerson(): void {
    console.log("Osoba:", this.form.value);
  }
}
