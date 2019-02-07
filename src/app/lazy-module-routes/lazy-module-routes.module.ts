import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyModuleRoutesRoutingModule } from './lazy-module-routes-routing.module';
import { LazyComponent } from '../lazy/lazy.component';

@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    LazyModuleRoutesRoutingModule
  ]
})
export class LazyModuleRoutesModule { }
