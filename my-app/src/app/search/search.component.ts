import { Component, OnInit } from '@angular/core';
import {MoviesService} from "../movies/movies.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  values :string = '';
  value :string = '';
  movies :any[];
  constructor(private moviesDb :MoviesService) {
    console.log('search bar');
    this.moviesDb.getMovies()
      .subscribe((snap) => {
        return this.movies = snap;
      });
  }

  ngOnInit() {
  }

  onKey = (event) => {
    this.values += event.target.value;
    console.log(this.values)
  };
  onEnter(value: string) { this.value += value; }
}
