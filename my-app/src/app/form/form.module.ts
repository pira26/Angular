import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { MoviesService } from '../services/movies.service';
import { EditFormComponent } from './edit-form/edit-form.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [FormComponent, EditFormComponent],
  providers: [MoviesService],
  exports: [FormComponent]
})
export class FormModule { }
