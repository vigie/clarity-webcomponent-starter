import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

//Note: use of extra ng prefix in the selector to distinguish usages of the native Angular component
// from the wrapped web component counterpart.
@Component({
  selector: 'vmw-ng-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: [
    '../../../node_modules/@clr/icons/clr-icons.css',
    '../../../node_modules/@clr/ui/clr-ui.css'
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class DatagridComponent {

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

}
