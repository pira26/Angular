import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page1.component';
import {CounterModule} from "./counter/counter.module";

@NgModule({
  imports: [CommonModule, CounterModule],
  declarations: [Page1Component],
  exports: [Page1Component],
})
export class Page1Module { }
