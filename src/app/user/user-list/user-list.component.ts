import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User, UserResponse} from "../../model/user.model";
import {Pagination} from "../../model/pagination.model";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  @Input()
  persons?: UserResponse;

  @Output()
  pageChange = new EventEmitter<Pagination>();

  private defaultPageNumber: number = 10;
  private defaultTotalElements: number = 10;
  private defaultPageSize: number = 10;
  private defaultFilter: string = "";

  filterForm = new FormGroup({
    lastName: new FormControl()
  });

  filter(): void {
    this.defaultPageNumber = 0;
    this.defaultFilter = this.filterForm.controls.lastName.value;
    this.pageChange.emit({
      page: this.defaultPageNumber,
      size: this.defaultPageSize,
      filter: {
        lastName: this.defaultFilter
      }
    });
  }

  @Output()
  personToUpdate = new EventEmitter<User>();

  @Output()
  personToDelete = new EventEmitter<number>();
  deletePerson(index: number): void {
    this.personToDelete.emit(index);
  }

  editPerson(user: User): void {
    this.personToUpdate.emit(user);
    //this.deletePerson(userId);
  }
}
