import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/user.model";



@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {
  form: FormGroup;
  persons: Array<User> = [];
  constructor() {
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      contact: new FormControl()
    });
  }
  savePerson(): void {
    this.persons.push(this.form.value);
    this.form.reset();
  }

  deletePerson(index: number): void {
    this.persons.splice(index, 1);
  }

  editPerson(i: number): void {
    this.form.setValue(this.persons[i]);
    this.deletePerson(i);
  }
}
