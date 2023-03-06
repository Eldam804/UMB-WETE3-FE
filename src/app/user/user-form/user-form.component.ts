import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../model/user.model";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  @Input()
  helpData?: string;

  @Input()
  set helpDataSetter(data: string){
    if (data){
      console.log("SETTER:", data);
    }
  }
  @Output()
  formCreate = new EventEmitter<User>();

  @Output()
  formUpdate = new EventEmitter<User>();
  form: FormGroup;
  @Input()
  set personData(person: User | undefined){
    if(person){
      this.form.setValue(person);
    }
  }
  constructor() {
    this.form = new FormGroup({
      id: new FormControl(),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    });
  }

  savePerson(): void {
    if(this.form.valid){
      console.log("sem sa dostanem");
      if(this.form.controls.id.value != undefined){
        console.log("ID definovane");
        const user: User = {
          id: this.form.controls.id.value,
          firstName: this.form.controls.firstName.value,
          lastName: this.form.controls.lastName.value,
        }
        this.formUpdate.emit(user);
      }else {
        console.log("ID nedefinovane");
        const user: User = {
          id: Date.now(),
          firstName: this.form.controls.firstName.value,
          lastName: this.form.controls.lastName.value,
        }
        this.formCreate.emit(user);
      }
      this.form.reset()
    }
  }

  ngOnInit(){
    console.log("ON_INIT")
  }
  ngOnDestroy(){
    console.log("ON_DESTROY")
  }
  ngOnChanges(changes: SimpleChanges){
    if(changes.helpData?.currentValue){
      console.log("ON CHANGES:", this.helpData);
    }

  }
}
