import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Movie } from '../movies/movie/movie.model';
import { MoviesService } from '../movies/movies.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  private myForm: FormGroup;

  movie :Movie = {
    title: "",
    category: "",
    releaseYear: "",
    poster: "",
    actors: "",
    directors: "",
    synopsis: "",
    rate: "",
    lastViewDate: "",
    price: ""
  };

  constructor(
    private moviesDb :MoviesService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      title: [this.movie.title, [Validators.required]],
      category: [this.movie.category, [Validators.required]],
      releaseYear: [this.movie.releaseYear, [Validators.required]],
      poster: [this.movie.poster, [Validators.required]],
      directors: [this.movie.directors, [Validators.required]],
      actors: [this.movie.actors, [Validators.required]],
      synopsis: [this.movie.synopsis, [Validators.required]],
      rate: [this.movie.rate, [Validators.required]],
      lastViewDate: [this.movie.lastViewDate, [Validators.required]],
      price: [this.movie.price, [Validators.required]]
    });
  }

  addMovie() {
    console.log('form', this.myForm.value);
    this.moviesDb.get().push(this.myForm.value);
  }
}
