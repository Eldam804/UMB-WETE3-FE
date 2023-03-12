import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Borrow} from "../../model/borrow.model";
import {BorrowingsService} from "../../common/service/borrowings.service";
import {User} from "../../model/user.model";

@Component({
  selector: 'app-borrowings-page',
  templateUrl: './borrowings-page.component.html',
  styleUrls: ['./borrowings-page.component.css']
})
export class BorrowingsPageComponent {
  borrowings: Array<Borrow> = [];
  borrow?: Borrow;
  constructor(private service: BorrowingsService) {
  }

  getBorrow(): void {
    this.service.getBorrows().subscribe( (borrow: Borrow[]) => {
      this.borrowings = borrow;
    })
  }
  createBorrow(borrow: Borrow): void{
    this.service.createBorrow(borrow).subscribe(() => {
      this.getBorrow();
    })
  }

  updateBorrow(borrow: Borrow): void {
    this.service.updateBorrow(borrow).subscribe( () => {
      this.getBorrow();
    });
  }
  deleteBorrow(borrowId: number):void {
    this.service.deleteBorrow(borrowId).subscribe(() => {
      this.getBorrow();
    });


  }
}
