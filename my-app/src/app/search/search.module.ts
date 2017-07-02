import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import {MoviesService} from "app/movies/movies.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SearchComponent],
  providers: [MoviesService],
  exports: [SearchComponent]
})
export class SearchModule { }
