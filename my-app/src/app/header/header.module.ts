import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'app/app.routes';
import { SearchModule } from '../search/search.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    SearchModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
