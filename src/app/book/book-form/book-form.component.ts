import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/user.model";
import {Book} from "../../model/book.model";

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {
  formBooks: FormGroup;
  @Output()
  formCreate = new EventEmitter<Book>;
  @Input()
  set bookData(book: Book | undefined){
    if(book){
      this.formBooks.setValue(book);
    }
  }
  constructor() {
    this.formBooks = new FormGroup({
      id: new FormControl(),
      title: new FormControl(null, Validators.required),
      author: new FormControl(null, Validators.required),
      available: new FormControl(null, Validators.required)
    });
  }

  addBook() {
    if(this.formBooks.valid){
      const book: Book = {
        id: Date.now(),
        title: this.formBooks.controls.title.value,
        author: this.formBooks.controls.author.value,
        available: this.formBooks.controls.available.value
      }
      this.formCreate.emit(book);
      this.formBooks.reset();
    }
  }
}
