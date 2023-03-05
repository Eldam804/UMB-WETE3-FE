import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Borrow} from "../../model/borrow.model";

@Component({
  selector: 'app-borrowings-page',
  templateUrl: './borrowings-page.component.html',
  styleUrls: ['./borrowings-page.component.css']
})
export class BorrowingsPageComponent {
  borrowings: Array<Borrow> = [];
  borrow?: Borrow;
  constructor() {
  }


  createBorrow(borrow: Borrow): void {
    this.borrowings.push(borrow);
  }

  updateBorrow(borrowId: number): void {
    this.borrow = this.borrowings.find(borrow => borrow.id === borrowId)
  }

  deleteBorrow(borrowId: number): void {
    const index: number = this.borrowings.findIndex(borrow => borrow.id === borrowId);
    if (index !== -1) {
      this.borrowings.splice(index, 1);
    }
  }
}
