import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ElementZoneStrategyFactory } from 'elements-zone-strategy';

import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MicroFrontendComponent } from './micro-frontend/micro-frontend.component';
import { DatagridComponent } from './datagrid/datagrid.component';
import { AppRoutingModule } from './app.routing.module';
import { Router } from '@angular/router';
import { WrapperComponent } from './wrapper/wrapper.component';
import { patchRouter } from './router-shim.service';

@NgModule({
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  declarations: [
    MicroFrontendComponent,
    DatagridComponent,
    WrapperComponent
  ],  
  entryComponents: [WrapperComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(injector: Injector, private router: Router) {
    // https://github.com/angular/angular/issues/24577
    const strategyFactory = new ElementZoneStrategyFactory(WrapperComponent, injector);
    const el = createCustomElement(WrapperComponent, { injector, strategyFactory });
    customElements.define('vmw-micro-frontend', el);
  }

  ngDoBootstrap(){
    patchRouter(this.router);

    this.router.initialNavigation();
  }
 }
