import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../movies.service';
import { MoviesListComponent } from './movies-list.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [MoviesListComponent],
  providers: [MoviesService],
  exports: [MoviesListComponent],
})
export class MoviesListModule { }
