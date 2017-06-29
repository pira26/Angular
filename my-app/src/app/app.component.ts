import { Component } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular first app';
  movies: FirebaseListObservable<any>;
  constructor(db: AngularFireDatabase) {
    this.movies = db.list('/movies');
  }
}
