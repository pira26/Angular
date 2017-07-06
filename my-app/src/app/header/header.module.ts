import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'app/app.routes';
import {AuthenticationModule} from "../authentication/authentication.module";

@NgModule({
  imports: [
    CommonModule,
    AuthenticationModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
