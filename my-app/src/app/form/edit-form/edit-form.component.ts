import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MoviesService} from "app/services/movies.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit, OnDestroy {
  private myEditForm: FormGroup;
  private movie: any;
  private id: any;
  private flag: boolean = true;
  private subscriptionParam;
  private subscription;

  constructor(private moviesDb: MoviesService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.subscriptionParam = this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.subscription = this.moviesDb.getMovieById(this.id - 1)
      .subscribe((snap) => {
        this.movie = snap;
        this.flag = true;
        return this.myEditForm = this.fb.group({
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
      });
  }

  save() {
    console.log('form', this.myEditForm.value);
    this.moviesDb.getMovieById(this.id - 1).update(this.myEditForm.value);
    this.router.navigate(['/movies']);
  }

  ngOnDestroy() {
    this.subscriptionParam.unsubscribe();
    this.subscription.unsubscribe();
  }

}
