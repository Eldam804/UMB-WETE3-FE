import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl:
    './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  enteredNumber = 0;
  check2 = [false, false, false, false, false, false, false, false];
  onChangeCheck(n :number): void{
    this.check2[n] = !this.check2[n];
    let binary = "";
    for (let i = 0; i < this.check2.length; i++) {
      if(this.check2[i]){
        binary += "1"
      }else{
        binary += "0"
      }
    }
    this.enteredNumber = parseInt(binary, 2);

    console.debug(this.check2);
  }
  onChangeNumber(n: number): void{
    if(n <= 255 && n >= 0){
      let binary = n.toString(2);
      while(binary.length < 8){
        binary = "0" + binary;
      }
      for (let i = 0; i < binary.length; i++) {
        if(binary[i] == "0"){
          this.check2[i] = false;
        }else{
        this.check2[i] = true;
        }
      }
      console.debug(binary)
    }
  }

}
