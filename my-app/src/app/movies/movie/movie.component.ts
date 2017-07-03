import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { MoviesService } from "../movies.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit, OnDestroy {

  movie :Array<object>;
  private selectedId :number;
  private subscription :Subscription;
  constructor(
    private moviesDb: MoviesService,
    private route: ActivatedRoute,
    private router :Router) { }

  ngOnInit() {/*
     this.movie = this.route.paramMap
       .switchMap((params :ParamMap) => {
       this.selectedId = +params.get('id');
       return this.moviesDb.get()
         .subscribe((movies) => {
           movies.find((movie) => {
             console.log(movie.id);
             return movie.id;
           });
         });
     });*/
    this.moviesDb.get()
      .subscribe((movies) => {
          return movies;
      });
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

}
