import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Borrow} from "../../model/borrow.model";

@Component({
  selector: 'app-borrowings-list',
  templateUrl: './borrowings-list.component.html',
  styleUrls: ['./borrowings-list.component.css']
})
export class BorrowingsListComponent {
  @Input()
  borrowed: Array<Borrow> = [];
  @Output()
  borrowToUpdate = new EventEmitter<Borrow>();

  @Output()
  borrowToDelete = new EventEmitter<number>();
  constructor() {

  }

  editBorrow(borrow: Borrow) {
    this.borrowToUpdate.emit(borrow);
  }

  deleteBorrow(id: number) {
    this.borrowToDelete.emit(id);
  }
}
