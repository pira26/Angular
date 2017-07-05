import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditFormComponent} from "./edit-form.component";
import {FormModule} from "../form.module";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormModule,
    ReactiveFormsModule,
    RouterModule
  ],
  declarations: [EditFormComponent],
  exports: [EditFormComponent]

})
export class EditFormModule {
}
