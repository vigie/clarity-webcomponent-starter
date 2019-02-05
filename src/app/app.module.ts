import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';

import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MicroFrontendComponent } from './micro-frontend/micro-frontend.component';

@NgModule({
  declarations: [
    MicroFrontendComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  entryComponents: [MicroFrontendComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(injector: Injector) {
    // https://github.com/angular/angular/issues/24577
    const strategyFactory = new ElementZoneStrategyFactory(MicroFrontendComponent, injector);
    const el = createCustomElement(MicroFrontendComponent, { injector, strategyFactory });
    customElements.define('vmw-micro-frontend', el);
  }

  ngDoBootstrap(){}
 }
