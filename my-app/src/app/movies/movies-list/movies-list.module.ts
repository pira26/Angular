import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MoviesService} from '../../services/movies.service';
import {MoviesListComponent} from './movies-list.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "app/app.routes";
import {MovieFilterPipe} from "app/pipes/movies-list-pipe";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  declarations: [MoviesListComponent, MovieFilterPipe],
  providers: [MoviesService],
  exports: [MoviesListComponent],
})

export class MoviesListModule {
}
