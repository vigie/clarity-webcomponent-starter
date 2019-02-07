import { Component, Input, Output, EventEmitter, ViewEncapsulation, NgModuleFactoryLoader, Injector, ViewContainerRef, ViewChildren, QueryList } from '@angular/core';

//Note: use of extra ng prefix in the selector to distinguish usages of the native Angular component
// from the wrapped web component counterpart.
@Component({
  selector: 'vmw-ng-micro-frontend',
  templateUrl: './micro-frontend.component.html',
  encapsulation: ViewEncapsulation.Emulated
})
export class MicroFrontendComponent {

  // Simple property users can safely interact with via the mirrored web-component attribute.
  @Input()
  greeting: string;

  // Complex property that should not be mirrored to web-component attribute (currently
  // Angular elements mirrors everything automatically and there is no way to indicate a
  // property should be skipped for mirroring, so the user should know which attributes to use
  // and which to ignore.)
  @Input()
  users = [];

  // I only put this input in because there seems to be a Clarity bug where selection does not work if
  // if you only define the output and not the input.
  @Input()
  selected;

  // Angular elements translates this to a standard custom DOM event raised by the web component.
  @Output()
  select = new EventEmitter()

  constructor(
    private readonly loader: NgModuleFactoryLoader,
    private readonly injector: Injector,  
  ) {}

  @ViewChildren('vcr', {read: ViewContainerRef}) vcr: QueryList<ViewContainerRef>;

  ngAfterViewInit() {
    this.vcr.changes.subscribe(change => {
      const vcr = change.last;
      if (!vcr) {
        return;
      }
      this.loader.load('./lazy-module/lazy-module.module#LazyModuleModule')
      .then(factory => {
        const module = factory.create(this.injector);
        var entryComponentType = module.injector.get('LAZY_ENTRY_COMPONENT')
        var componentFactory = module.componentFactoryResolver.resolveComponentFactory(entryComponentType);
        vcr.createComponent(componentFactory);
      })       
    })
  }

}
