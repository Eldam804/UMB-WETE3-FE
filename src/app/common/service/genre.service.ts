import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Borrow} from "../../model/borrow.model";
import {Genre} from "../../model/genre.model";


@Injectable({
  providedIn: 'root'
})
export class GenreService {

  private url = 'http://localhost:8080/api/genre';
  constructor(private http: HttpClient) {}

  getGenres(): Observable<Genre[]>{
    return this.http.get<Genre[]>(this.url);
  }
  getGenre(genreId: number): Observable<Genre>{
    return this.http.get<Genre>(this.url + "/" + genreId);
  }
  createGenre(genre: Genre): Observable<number>{
    return this.http.post<number>(this.url, genre);
  }

  updateGenre(genre: Genre): Observable<number>{
    return this.http.put<number>(this.url + "/" + genre.id, genre);
  }
  deleteGenre(genreId: number): Observable<void>{
    return this.http.delete<void>(this.url + "/" + genreId);
  }



}

