import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";

@Injectable()
export class WebsiteVisitorsService {

  /*db :Promise<number>;

   constructor() {
   this.db = new Promise((resolve) => {
   setTimeout(() => {
   resolve(29);
   }, 3000)
   });
   }
   get = () => this.db;*/
  database: FirebaseListObservable<any>;

  constructor(db: AngularFireDatabase) {
    this.database = db.list('/counters', {preserveSnapshot: true});
  }

}
