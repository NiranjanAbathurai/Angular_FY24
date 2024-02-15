import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadRoutingModule } from './lazy-load-routing.module';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    LazyLoadRoutingModule,
  ],
  exports:[TestComponent]
})
export class LazyLoadModule { }
