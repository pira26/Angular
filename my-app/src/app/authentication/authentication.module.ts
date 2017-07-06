import  {CommonModule} from "@angular/common";
import { NgModule } from '@angular/core';
import { AuthenticationComponent } from './authentication.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [AuthenticationComponent],
  exports: [AuthenticationComponent]
})
export class AuthenticationModule { }
