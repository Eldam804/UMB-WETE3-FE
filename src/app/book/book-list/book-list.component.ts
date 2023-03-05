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
  bookToUpdate = new EventEmitter<number>();

  @Output()
  bookToDelete = new EventEmitter<number>();
  constructor() {

  }

  editBook(id: number) {
    this.bookToUpdate.emit(id);
    this.deleteBook(id);
  }

  deleteBook(id: number) {
    this.bookToDelete.emit(id);
  }
}
