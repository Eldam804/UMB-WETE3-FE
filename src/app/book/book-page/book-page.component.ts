import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Book} from "../../model/book.model";

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent {
  books: Array<Book> = [];
  book?: Book;
  constructor() {
  }


  createBook($event: Book): void {
    this.books.push($event);
  }

  updateBook(bookId: number): void {
    this.book = this.books.find(book => book.id === bookId)
  }

  deleteBook(bookId: number): void {
    const index: number = this.books.findIndex(book => book.id === bookId);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }
}
