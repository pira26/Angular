import {CommonModule} from "@angular/common";
import { NgModule } from '@angular/core';
import { AuthenticationComponent } from './authentication.component';
import {AuthenticationService} from "../services/authentication.service";

@NgModule({
  declarations: [AuthenticationComponent],
  imports: [CommonModule],
  providers: [AuthenticationService],
  exports: [AuthenticationComponent]
})
export class AuthenticationModule { }
