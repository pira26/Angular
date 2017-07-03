import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Page1Component } from './page1/page1.component';
import { MoviesComponent } from './movies/movies.component';
import { FormComponent } from './form/form.component';
import { MovieComponent } from './movies/movie/movie.component';

export const appRoutes: Routes = [
  { path: 'page1', component:  Page1Component},
  { path: 'movies', component:  MoviesComponent},
  { path: 'movies/:id', component:  MovieComponent},
  { path: 'add', component:  FormComponent},
  { path: '**', component: PageNotFoundComponent }
];
