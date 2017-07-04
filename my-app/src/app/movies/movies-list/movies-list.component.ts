import {Component, OnInit, OnDestroy} from '@angular/core';
import {MoviesService} from '../movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit, OnDestroy {

  movies: Array<object>;
  private subscription;

  constructor(private moviesDb: MoviesService) {
  }

  ngOnInit() {
    this.subscription = this.moviesDb.getMovies()
      .subscribe((snap) => {
        return this.movies = snap;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  deleteMovie(key: string) {
    this.moviesDb.getMovies().remove(key);
  }

}
