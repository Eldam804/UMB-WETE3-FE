import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthModel} from "../../model/auth.model";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = "http://localhost:8080/api/token"

  constructor(private http: HttpClient) {

  }

  isLogged(): boolean {
    return this.getToken() !== null;
  }
  login(user: AuthModel): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Basic' + btoa(user.username + ':' + user.password)
    });
    return this.http.post(this.apiUrl, null, {headers: headers}).pipe(
      tap(response => console.debug(response)),
      tap((response: any) => this.setToken(response.headers.get("Authorization")))
    )
  }

  logout(): Observable<any>{
    return this.http.delete(this.apiUrl, {});
  }

  private setToken(authorization: string) {
    localStorage.setItem('token', authorization);
  }
  public getToken(): string | null {
    return localStorage.getItem('token');
  }
}
