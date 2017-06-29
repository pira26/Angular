import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {WebsiteVisitorsService} from "./website-visitors.service";

@Injectable()
export class CounterService {

  private count :BehaviorSubject<number>;
  private flag :BehaviorSubject<boolean>;
  private startingNumber :number;

  constructor(public visitors :WebsiteVisitorsService) {
    this.count = new BehaviorSubject(0);
    this.flag = new BehaviorSubject(true);

    /*this.visitors.get().then((value) => {
      this.startingNumber = value;
      this.count.next(this.startingNumber);
      this.flag.next(false);
    });*/

    this.visitors.database
      .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
          console.log(snapshot.key);
          console.log(snapshot.val());
          this.startingNumber = snapshot.val();
          this.count.next(this.startingNumber);
          this.flag.next(false);
        });
      });
  }

  get = () => this.count;
  getFlag = () => this.flag;

  plusOne = () => this.count.next(this.startingNumber++);
  minusOne = () => this.count.next(this.startingNumber--);
}
