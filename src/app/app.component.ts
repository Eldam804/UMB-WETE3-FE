import { Component } from '@angular/core';
import {AuthService} from "./authentication/service/auth.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-root',
  templateUrl:
    './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private authService: AuthService, private router: Router) {

  }
  logout(): void {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/login']);
      localStorage.removeItem('token');
      localStorage.clear();
    });
  }

}
