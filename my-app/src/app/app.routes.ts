import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Page1Component } from './page1/page1.component';
import { MoviesComponent } from './movies/movies.component';
import { FormComponent } from './form/form.component';
import { MovieComponent } from './movies/movie/movie.component';
import {EditFormComponent} from "./form/edit-form/edit-form.component";
import {AuthenticationComponent} from "./authentication/authentication.component";

export const appRoutes: Routes = [
  { path: '', component:  AuthenticationComponent},
  { path: 'page1', component:  Page1Component},
  { path: 'movies', component:  MoviesComponent},
  { path: 'movies/:id', component:  MovieComponent},
  { path: 'edit/:id', component: EditFormComponent},
  { path: 'add', component:  FormComponent},
  { path: '**', component: PageNotFoundComponent }
];
