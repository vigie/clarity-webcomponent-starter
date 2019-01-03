import { Component } from '@angular/core';

// Note: in a real library exporting web-components you would delete all this app.component
// stuff entirely before publishing. It is useful to leave it in during development however,
// for rapid testing and compiling using `npm start`

@Component({
  selector: 'vmw-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = [
    {
        id: 1,
        name: 'Matt',
        creation: Date.now(),
        color: 'Orange'
    },
    {
        id: 2,
        name: 'Etienne',
        creation: Date.now(),
        color: 'Green'
    }    
  ];
}
