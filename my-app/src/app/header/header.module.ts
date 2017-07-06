import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'app/app.routes';
import { SearchModule } from '../search/search.module';
import {AuthenticationModule} from "../authentication/authentication.module";
import {AuthenticationService} from "../services/authentication.service";

@NgModule({
  imports: [
    CommonModule,
    AuthenticationModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [HeaderComponent],
  providers:[AuthenticationService],
  exports: [HeaderComponent]
})
export class HeaderModule { }
