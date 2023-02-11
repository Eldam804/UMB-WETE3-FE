import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl:
    './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  enteredNumber=0;

  checkbox = [false,false,false,false,false,false,false,false];
  ZmenaCheckboxu(cislo :number): void{

    this.checkbox[cislo] = !this.checkbox[cislo];
    let binary = "";
    for (let i = 0; i<8;i++) {
      if (this.checkbox[i]) {
        binary += "1"
      } else {
        binary += "0"
      }
    }
      this.enteredNumber = parseInt(binary,2);
    console.log(this.enteredNumber);
  }
  ZmenaCislo (cislo :number): void{
    if(cislo<=255 && cislo >=0) {
      let binary = cislo.toString(2);
      while (binary.length < 8) {
        binary = "0" + binary;
      }
      for (let i = 0; i < binary.length; i++) {
        if (binary[i] == "0") {
          this.checkbox[i] = false;
        } else {
          this.checkbox[i] = true;
        }
      }
    }
  }
}
