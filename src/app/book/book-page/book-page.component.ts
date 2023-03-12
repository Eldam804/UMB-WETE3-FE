import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Book} from "../../model/book.model";
import {BookService} from "../../common/service/book.service";
import {User} from "../../model/user.model";

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent {
  books: Array<Book> = [];
  book?: Book;
  constructor(private service: BookService) {
    this.getBooks();
  }

  getBooks(){
    this.service.getBooks().subscribe( (books: Book[]) => {
      this.books = books;
    })
  }

  createBook(book: Book): void {
    this.service.createBook(book).subscribe(() => {
      this.getBooks();
    })
  }

  updateBook(book: Book): void {
    this.service.updateBook(book).subscribe( () => {
      this.getBooks();
    });
  }

  deleteBook(bookId: number): void {
    this.service.deleteBook(bookId).subscribe(() => {
      this.getBooks();
    });
  }
}
