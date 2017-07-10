import {Component} from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent {
  private email: string;
  private password: string;

  constructor(private authService: AuthenticationService,
              private router: Router) {
  }

  signIn() {
    this.authService.signUpUser(this.email, this.password);
    this.email = this.password = '';
  }

  logIn() {
    this.authService.logInUser(this.email, this.password);
    this.email = this.password = '';
  }

  logOut() {
    this.authService.logOutUser();
  }

  signUpWithGoogle() {
    this.authService.signUpUserWithGoogle();
    this.router.navigate(['/movies']);
    console.log('it works');
  }
}
