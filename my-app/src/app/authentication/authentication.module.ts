import {CommonModule} from "@angular/common";
import { NgModule } from '@angular/core';
import { AuthenticationComponent } from './authentication.component';

@NgModule({
  declarations: [AuthenticationComponent],
  imports: [CommonModule],
  exports: [AuthenticationComponent]
})
export class AuthenticationModule { }
