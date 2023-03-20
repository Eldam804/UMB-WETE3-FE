import {Component, EventEmitter, Output, TemplateRef} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User, UserResponse} from "../../model/user.model";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {UserService} from "../../common/service/user.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Observable} from "rxjs";
import {Pagination} from "../../model/pagination.model";



@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent {
  persons?: UserResponse;
  person?: User;

  constructor(private service: UserService,
              private modalService: NgbModal
              ) {
    this.getPersons();
  }
  getPersons(pagination?: Pagination): void {
    this.service.getUsers(pagination).pipe().subscribe( (persons: UserResponse) => {
      this.persons = persons;
    })
  }
  openModal(content: TemplateRef<any>): void {
    this.modalService.open(content, {
      size: "sm"
    });
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
