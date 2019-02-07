import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'vmw-ng-datagrid',
  templateUrl: './datagrid.component.html',
  styleUrls: ['./datagrid.component.css']
})
export class DatagridComponent  {

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
