import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';

@Injectable()
export class MoviesService {
  constructor(private db: AngularFireDatabase) {}

  getMovies(): FirebaseListObservable<any[]> {
    return this.db.list('/movies');
  }

  getMovieById(id: number): FirebaseObjectObservable<any[]> {
    return this.db.object(`/movies/${id}`);
  }
}
