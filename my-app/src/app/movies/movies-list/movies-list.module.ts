import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from '../movies.service';
import { MoviesListComponent } from './movies-list.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "app/app.routes";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [MoviesListComponent],
  providers: [MoviesService],
  exports: [MoviesListComponent],
})
export class MoviesListModule { }
