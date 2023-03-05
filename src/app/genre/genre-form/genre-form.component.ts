import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Genre} from "../../model/genre.model";

@Component({
  selector: 'app-genre-form',
  templateUrl: './genre-form.component.html',
  styleUrls: ['./genre-form.component.css']
})
export class GenreFormComponent {

  formGenre: FormGroup;
  @Output()
  formCreate = new EventEmitter<Genre>;
  @Input()
  set genreData(genre: Genre | undefined){
    if(genre){
      this.formGenre.setValue(genre);
    }
  }
  constructor() {
    this.formGenre = new FormGroup({
    id: new FormControl(),
    nazov: new FormControl(null, Validators.required)
    });
  }

  addGenre() {
    if(this.formGenre.valid){
      const genre: Genre = {
        id: Date.now(),
        nazov: this.formGenre.controls.nazov.value
      }
      this.formCreate.emit(genre);
      this.formGenre.reset();
    }
  }

}
