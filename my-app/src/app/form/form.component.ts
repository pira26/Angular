import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Movie} from '../movies/movie/movie.model';
import {MoviesService} from '../services/movies.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  private myForm: FormGroup;
  private movie: Movie = {
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

  constructor(private moviesDb: MoviesService,
              private fb: FormBuilder,
              private router: Router) {
  }

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

  save() {
    console.log('form', this.myForm.value);
    this.moviesDb.getMovies().push(this.myForm.value);
    this.router.navigate(['/movies']);
  }
}
