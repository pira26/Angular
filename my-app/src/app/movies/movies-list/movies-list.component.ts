import { Component, OnInit, OnDestroy } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit, OnDestroy {

  movies :any[];
  year: number[];
  private subscription :Subscription;
  constructor(private moviesDb: MoviesService) { }

  ngOnInit() {
    this.moviesDb.get()
      .subscribe((snap) => {
        console.log(snap);
        return this.movies = snap;
      });
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
  updateMovie(key :string, newText: object) {
    this.moviesDb.get().update(key, newText);
  }
  deleteMovie(key :string) {
    this.moviesDb.get().remove(key);
  }
  sortMoviesByYear(year) {
    year.sort((a, b) => {
      return a - b;
    });
    return year;
  }
}
