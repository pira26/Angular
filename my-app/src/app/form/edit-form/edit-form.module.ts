import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EditFormComponent} from "./edit-form.component";
import {FormModule} from "../form.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormModule,
    ReactiveFormsModule
  ],
  declarations: [EditFormComponent],
  exports: [EditFormComponent]

})
export class EditFormModule {
}
