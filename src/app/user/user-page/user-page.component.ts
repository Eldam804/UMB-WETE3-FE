import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/user.model";



@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {
  persons: Array<User> = [];
  person?: User;

  constructor() {

  }

  createPerson(person: User): void{
    this.persons.push(person);
    console.debug("PERSONS:", this.persons);
  }

  selectPersonToUpdate(personId: number): void {
    this.person = this.persons.find(person => person.id === personId)
  }

  deletePerson(personId: number):void {
    const index: number = this.persons.findIndex(person => person.id === personId);
    if (index !== -1){
      this.persons.splice(index, 1);
    }
  }
}
