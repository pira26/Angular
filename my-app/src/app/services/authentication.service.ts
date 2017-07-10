import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from 'firebase/app';

@Injectable()
export class AuthenticationService {

  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth) {
    this.user = afAuth.authState;
  }

  signUpUser(email: string, password: string) {
    this.afAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then((value) => {
        console.log('Success!', value);
      })
      .catch((err) => {
        console.error('Something went wrong:',err.message);
      });
  }

  logInUser(email: string, password: string) {
    this.afAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then((value) => {
        console.log('Nice, it worked!', value);
      })
      .catch((err) => {
        console.error('Something went wrong:',err.message);
      });
  }

  logOutUser() {
    this.afAuth
      .auth
      .signOut()
      .then( () => console.log('sign out successfully'))
      .catch((err) => {
        console.error('Something went wrong:',err.message);
      });
  }

  signUpUserWithGoogle() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

/*
  private email :string;
  private password :string;

  constructor() {}

  signUpUser(email, password) {
    firebase.auth()
      .createUserWithEmailAndPassword(this.email, this.password)
      .catch((err) => {
        // Handle Errors here.
        let errorCode = err;
        let errorMessage = err.message;
        console.log('sign in', errorCode, errorMessage);
      });
  }*/

}
