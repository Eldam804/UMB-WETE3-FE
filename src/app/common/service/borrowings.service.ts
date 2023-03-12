import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Borrow} from "../../model/borrow.model";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class BorrowingsService {
  private url = 'http://localhost:8080/api/borrowing';
  constructor(private http: HttpClient) {}

    getBorrows(): Observable<Borrow[]>{
      return this.http.get<Borrow[]>(this.url);
    }
    getBorrow(borrowId: number): Observable<Borrow>{
      return this.http.get<Borrow>(this.url + "/" + borrowId);
    }
    createBorrow(borrow: Borrow): Observable<number>{
      return this.http.post<number>(this.url, borrow);
    }

  updateBorrow(borrow: Borrow): Observable<number>{
      return this.http.put<number>(this.url + "/" + borrow.id, borrow);
    }
    deleteBorrow(borrowId: number): Observable<void>{
      return this.http.delete<void>(this.url + "/" + borrowId);
    }



}
