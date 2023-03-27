import { Component } from '@angular/core';
import {AuthModel} from "../../model/auth.model";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  form: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.form = new FormGroup({
      username: new FormControl(undefined, Validators.required),
      password: new FormControl(undefined, Validators.required)
    })
  }
  login(): void {
    if(this.form.valid){
      if(this.form.controls.username.value && this.form.controls.password.value){
        const auth: AuthModel = {
          username: this.form.controls.username.value,
          password: this.form.controls.password.value
        };
        this.authService.login(auth).subscribe(() => {this.router.navigate(['/']);
        });
      }
    }
  }
}
