import {Component, Input, OnInit} from '@angular/core';
import {MoviesService} from "../services/movies.service";
import {FirebaseListObservable} from "angularfire2/database";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  values: string = '';

  @Input() searchModel: string;
  movies: FirebaseListObservable<any>;
  constructor(public moviesDb: MoviesService) {
  }
  ngOnInit() {
    this.movies = this.moviesDb.getMovies()
  }

  onKey = (event) => {
    this.values = event.target.value;
    console.log(this.values)
  };
}
