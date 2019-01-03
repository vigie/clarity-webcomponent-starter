import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatagridComponent } from './datagrid/datagrid.component';
import { AppComponent } from './app.component';

// Note: toggle the commented lines during development so that you can use the 
// rapid `npm start` Angular developement server.

@NgModule({
  declarations: [
    DatagridComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  // bootstrap: [AppComponent],
  entryComponents: [DatagridComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const el = createCustomElement(DatagridComponent, { injector });
    customElements.define('vmw-datagrid', el);
  }

  ngDoBootstrap(){}
 }
