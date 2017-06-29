import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import { AppComponent } from './app.component';
import {HeaderModule} from "./header/header.module";
import {PageNotFoundModule} from "./page-not-found/page-not-found.module";
import {Page1Module} from "./page1/page1.module";
import {Page2Module} from "./page2/page2.module";
import {Page3Module} from "./page3/page3.module";
import {Page4Module} from "./page4/page4.module";
import {Page5Module} from "./page5/page5.module";
//import {AuthenticationModule} from "./authentication/authentication.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase, 'my-angular-app'), // imports firebase/app needed for everything
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    //AuthenticationModule,
    HeaderModule,
    Page1Module,
    Page2Module,
    Page3Module,
    Page4Module,
    Page5Module,
    PageNotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
