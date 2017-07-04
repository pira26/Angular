import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MoviesService} from "app/movies/movies.service";
import {FormComponent} from "../form.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-edit-form',
  templateUrl: '../form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent extends FormComponent {
  movie: any;
  id: number;
  private subscriptionParam;
  private subscription;

  constructor(protected moviesDb: MoviesService,
              protected fb: FormBuilder,
              private route: ActivatedRoute) {
    super(moviesDb, fb);
  }

  ngOnInit() {
    this.subscriptionParam = this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.subscription = this.moviesDb.getMovieById(this.id - 1)
      .subscribe((snap) => {
        return this.movie = snap;
      });
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
    this.moviesDb.getMovieById(this.id - 1).update(this.myForm.value);
  }

  ngOnDestroy() {
    this.subscriptionParam.unsubscribe();
    this.subscription.unsubscribe();
  }


}
