import {Component} from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  private email: string;
  private password: string;

  constructor(private authService: AuthenticationService) {
  }

  signIn() {
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  logIn() {
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }

  logOut() {
    this.authService.logout();
  }
}
