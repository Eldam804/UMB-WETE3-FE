import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/user.model";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {UserService} from "../../common/service/user.service";



@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {
  persons: Array<User> = [];
  person?: User;

  constructor(private service: UserService) {
    this.getPersons();
  }
  getPersons(): void {
    this.service.getUsers().subscribe( (persons: User[]) => {
      this.persons = persons;
    })
  }

  createPerson(person: User): void{
    this.service.createUser(person).subscribe(() => {
        this.getPersons();
      })
  }

  updatePerson(person: User): void {
    this.service.updateUser(person).subscribe( () => {
      this.getPersons();
    });
  }

  deletePerson(personId: number):void {
    this.service.deleteUser(personId).subscribe(() => {
      this.getPersons();
    });
  }
}
