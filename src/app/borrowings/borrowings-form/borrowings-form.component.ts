import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Borrow} from "../../model/borrow.model";

@Component({
  selector: 'app-borrowings-form',
  templateUrl: './borrowings-form.component.html',
  styleUrls: ['./borrowings-form.component.css']
})
export class BorrowingsFormComponent {
  formBorrowings: FormGroup;
  @Output()
  formCreate = new EventEmitter<Borrow>;
  @Input()
  set borrowData(borrow: Borrow | undefined){
    if(borrow){
      this.formBorrowings.setValue(borrow);
    }
  }
  constructor() {
    this.formBorrowings = new FormGroup({
      id: new FormControl(),
      book: new FormControl(null, Validators.required),
      user: new FormControl(null, Validators.required)
    });
  }

  addBorrowed() {
    if(this.formBorrowings.valid){
      const borrow: Borrow = {
        id: Date.now(),
        book: this.formBorrowings.controls.book.value,
        user: this.formBorrowings.controls.user.value
      }
      this.formCreate.emit(borrow);
      this.formBorrowings.reset();
    }
  }
}
