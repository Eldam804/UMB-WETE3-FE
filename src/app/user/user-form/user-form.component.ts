import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/user.model";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  @Output()
  formCreate = new EventEmitter<User>();
  @Output()
  formUpdate = new EventEmitter<User>();
  form: FormGroup;
  @Input()
  set personData(person: User | undefined){
    if(person){
      this.form.setValue(person);
    }
  }
  constructor() {
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    });
  }
  private prepareUser(id?: number): User {
    return {
      id: id !== undefined ? id : Date.now(),
      name: this.form.controls.name.value,
      surname: this.form.controls.surname.value };
  }
  savePerson(): void {
    if (this.form.valid) {
      if (this.form.controls.id.value) {
        this.formUpdate.emit(
          this.prepareUser(this.form.controls.id.value));
      } else {
        this.formCreate.emit(this.prepareUser());
      }
      this.form.reset();
    } }


}

