import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MoviesListModule } from './movies-list/movies-list.module';
import {SearchModule} from "../search/search.module";

@NgModule({
  imports: [
    CommonModule,
    MoviesListModule
  ],
  declarations: [MoviesComponent],
  exports: [MoviesComponent]
})
export class MoviesModule { }
