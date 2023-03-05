import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Genre} from "../../model/genre.model";

@Component({
  selector: 'app-genre-page',
  templateUrl: './genre-page.component.html',
  styleUrls: ['./genre-page.component.css']
})
export class GenrePageComponent {
  genres: Array<Genre> = [];
  genre?: Genre;
  constructor() {
  }


  createGenre(genre: Genre): void {
    this.genres.push(genre);
  }

  updateGenre(genreId: number): void {
    this.genre = this.genres.find(genre => genre.id === genreId)
  }

  deleteGenre(genreId: number): void {
    const index: number = this.genres.findIndex(genre => genre.id === genreId);
    if (index !== -1) {
      this.genres.splice(index, 1);
    }
  }
}
