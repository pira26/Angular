import {Component, OnDestroy, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit, OnDestroy {

  movie: any;
  id: any;
  private subscriptionParam;
  private subscription;

  constructor(private moviesDb: MoviesService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.subscriptionParam = this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.subscription = this.moviesDb.getMovieById(this.id - 1)
      .subscribe((snap) => {
        return this.movie = snap;
      });

  }

  ngOnDestroy() {
    this.subscriptionParam.unsubscribe();
    this.subscription.unsubscribe();
  }

  goHome() {
    this.router.navigate(['/movies']);
  }
}
