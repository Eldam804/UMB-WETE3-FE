import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


export enum Menu{
  BOOKS = "BOOKS",
  USERS = "USERS",
  BORROWINGS = "BORROWINGS"
}

@Component({
  selector: 'app-root',
  templateUrl:
    './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  form: FormGroup;
  formBooks: FormGroup;
  formBorrowings: FormGroup;
  menu = Menu;
  actualMenu: Menu = Menu.USERS
  persons: Array<{
    id: number;
    name: string;
    surname: string;
    contact: string
  }> = [];
  books: Array<{
    id: number;
    title: string;
    author: string;
    available: number
  }> = [];
  borrowed: Array<{
    id: number;
    user: string;
    book: string;
  }> = [];
  constructor() {
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl(null, Validators.required),
      surname: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      contact: new FormControl()
    });
    this.formBooks = new FormGroup({
      id: new FormControl(),
      title: new FormControl(),
      author: new FormControl(),
      available: new FormControl()
    });
    this.formBorrowings = new FormGroup({
      id: new FormControl(),
      user: new FormControl(),
      book: new FormControl()
    });
  }
  savePerson(): void {
    this.persons.push(this.form.value);
    this.form.reset();
  }
  addBook(): void{
    this.books.push(this.formBooks.value);
    this.formBooks.reset();
  }
  addBorrowed(): void {
    this.borrowed.push(this.formBorrowings.value);
    this.formBorrowings.reset();
  }
  changeMenu(changedMenu: Menu): void {
    this.actualMenu = changedMenu;
  }
}
