import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Book} from "../../model/book.model";

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent {
  formBooks: FormGroup;
  books: Array<Book> = [];
  constructor() {
    this.formBooks = new FormGroup({
      id: new FormControl(),
      title: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
      available: new FormControl(null, Validators.required)
    });
  }
  addBook(): void{
    this.books.push(this.formBooks.value);
    this.formBooks.reset();
  }
  deleteBook(index: number): void {
    this.books.splice(index, 1);
  }

  editBook(i: number): void {
    this.formBooks.setValue(this.books[i]);
    this.deleteBook(i);
  }
}
