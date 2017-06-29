import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import {CounterService} from "./counter.service";
import {WebsiteVisitorsService} from "./website-visitors.service";

@NgModule({
  imports: [CommonModule],
  declarations: [CounterComponent],
  providers: [CounterService, WebsiteVisitorsService],
  exports: [CounterComponent]
})
export class CounterModule { }
