import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-borrowings-page',
  templateUrl: './borrowings-page.component.html',
  styleUrls: ['./borrowings-page.component.css']
})
export class BorrowingsPageComponent {
  formBorrowings:FormGroup;
  borrowed: Array<{
    id: number;
    user: string;
    book: string;
  }> = [];
  constructor() {
    this.formBorrowings = new FormGroup({
      id: new FormControl(),
      user: new FormControl(),
      book: new FormControl()
    });
  }
  addBorrowed(): void {
    this.borrowed.push(this.formBorrowings.value);
    this.formBorrowings.reset();
  }


  editBorrow(i: number): void{
    this.formBorrowings.setValue(this.borrowed[i]);
    this.deleteBorrow(i);

  }

  deleteBorrow(index: number): void {
    this.borrowed.splice(index, 1);
  }
}
