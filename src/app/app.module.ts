import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';

import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatagridComponent } from './datagrid/datagrid.component';

@NgModule({
  declarations: [
    DatagridComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  entryComponents: [DatagridComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(injector: Injector) {
    // https://github.com/angular/angular/issues/24577
    const strategyFactory = new ElementZoneStrategyFactory(DatagridComponent, injector);
    const el = createCustomElement(DatagridComponent, { injector, strategyFactory });
    customElements.define('vmw-datagrid', el);
  }

  ngDoBootstrap(){}
 }
