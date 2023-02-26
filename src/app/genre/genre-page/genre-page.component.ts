import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-genre-page',
  templateUrl: './genre-page.component.html',
  styleUrls: ['./genre-page.component.css']
})
export class GenrePageComponent {
  formGenre:FormGroup;
  Genre: Array<{
    id: number;
    nazov: string;
  }> = [];

  constructor() {
    this.formGenre = new FormGroup({
      id: new FormControl(),
      nazov: new FormControl()
    });
  }
  addGenre(): void {
    this.Genre.push(this.formGenre.value);
    this.formGenre.reset();
  }


  editGenre(i: number): void{
    this.formGenre.setValue(this.Genre[i]);
    this.deleteGenre(i);

  }

  deleteGenre(index: number): void {
    this.Genre.splice(index, 1);
  }

}
