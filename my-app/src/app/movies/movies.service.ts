import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@Injectable()
export class MoviesService {
  constructor(private db: AngularFireDatabase) {}
  get (): FirebaseListObservable<any[]> {
    return this.db.list('/movies');
  }
}
