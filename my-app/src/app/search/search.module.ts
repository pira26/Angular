import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchComponent} from './search.component';
import {MoviesService} from "app/services/movies.service";
import {MoviesListModule} from "../movies/movies-list/movies-list.module";
import {MovieFilterPipe} from "../pipes/movies-list-pipe";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MoviesListModule
  ],
  declarations: [
    SearchComponent
  ],
  providers: [MoviesService],
  exports: [SearchComponent]
})

export class SearchModule {
}
