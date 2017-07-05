import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { MoviesService } from '../../services/movies.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [MovieComponent],
  providers: [MoviesService],
  exports: [MovieComponent]
})
export class MovieModule { }
