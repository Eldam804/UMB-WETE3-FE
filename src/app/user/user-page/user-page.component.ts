import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/user.model";
import {HttpClient, HttpClientModule} from "@angular/common/http";



@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {
  persons: Array<User> = [];
  person?: User;

  constructor(private http: HttpClient) {
    this.getPersons();
  }
  getPersons(): void {
    this.http.get<User[]>("http://labs.fpv.umb.sk:8080/api/customers").subscribe( (persons: User[]) => {
      this.persons = persons;
    })
  }

  createPerson(person: User): void{
    this.http.post('http://labs.fpv.umb.sk:8080/api/customers', person)
      .subscribe(() => {
        console.log("OSOBA bola uspesne ulozena.")
        this.getPersons();
      })
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

  updatePerson(per: User) {
    const index: number = this.persons.findIndex(person => person.id === per.id);
    if(index !== -1){
      this.persons[index] = per;
    }
  }
}
