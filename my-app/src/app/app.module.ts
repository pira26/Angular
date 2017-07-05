import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { Page1Module } from './page1/page1.module';
import { MoviesModule } from './movies/movies.module';
import { FormModule } from './form/form.module';
import { MovieModule } from './movies/movie/movie.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase, 'my-angular-app'), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    HeaderModule,
    Page1Module,
    MoviesModule,
    MovieModule,
    FormModule,
    PageNotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
