import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "../../model/book.model";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent {
  @Input()
  books: Array<Book> = [];
  @Output()
  bookToUpdate = new EventEmitter<Book>();

  @Output()
  bookToDelete = new EventEmitter<number>();
  constructor() {

  }

  editBook(book: Book) {
    this.bookToUpdate.emit(book);
  }

  deleteBook(id: number) {
    this.bookToDelete.emit(id);
  }
}
