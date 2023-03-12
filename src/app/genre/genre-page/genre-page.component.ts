import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Genre} from "../../model/genre.model";
import {GenreService} from "../../common/service/genre.service";;

@Component({
  selector: 'app-genre-page',
  templateUrl: './genre-page.component.html',
  styleUrls: ['./genre-page.component.css']
})
export class GenrePageComponent {
  genres: Array<Genre> = [];
  genre?: Genre;

  constructor(private service: GenreService) {
  }


  getGenre(): void {
    this.service.getGenres().subscribe((genre: Genre[]) => {
      this.genres = genre;
    })
  }

  createGenre(genre: Genre): void {
    this.service.createGenre(genre).subscribe(() => {
      this.getGenre();
    })
  }

  updateGenre(genre: Genre): void {
    this.service.updateGenre(genre).subscribe(() => {
      this.getGenre();
    });
  }

  deleteGenre(genreId: number): void {
    this.service.deleteGenre(genreId).subscribe(() => {
      this.getGenre();
    });


  }
}
