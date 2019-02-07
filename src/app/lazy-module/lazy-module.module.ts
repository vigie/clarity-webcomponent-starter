import { NgModule, Component } from '@angular/core';

@Component({
  template: `<p>Lazy on demand works</p>`
})
export class LazyComponent {

  constructor() { }

}

@NgModule({
  declarations: [LazyComponent],
  entryComponents: [LazyComponent],
  providers: [{provide: 'LAZY_ENTRY_COMPONENT', useValue: LazyComponent}]
})
export class LazyModuleModule { }



