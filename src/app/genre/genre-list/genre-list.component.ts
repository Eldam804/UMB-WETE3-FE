import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Genre} from "../../model/genre.model";

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent {
  @Input()
  genre: Array<Genre> = [];
  @Output()
  genreToUpdate = new EventEmitter<Genre>();

  @Output()
  genreToDelete = new EventEmitter<number>();

  constructor() {

  }

  editGenre(genre: Genre) {
    this.genreToUpdate.emit(genre);
    // this.deleteGenre(id);
  }

  deleteGenre(id: number) {
    this.genreToDelete.emit(id);
  }

}
