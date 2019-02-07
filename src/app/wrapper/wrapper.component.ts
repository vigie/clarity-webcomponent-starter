import { Component, OnInit, Input, ViewChildren, QueryList, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ClrTabLink } from '@clr/angular';

@Component({
  selector: 'vmw-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {

  constructor(private router: Router) { }

  @ViewChild('mfe', {read: ElementRef}) mfe: ElementRef;

  private datagridTab: any;
  private lazyRouteTab: any;
  private lazyNoRouteTab: any;
  ngAfterViewInit() {
    this.datagridTab = this.mfe.nativeElement.querySelectorAll('button[clrTabLink]')[0];
    this.lazyRouteTab = this.mfe.nativeElement.querySelectorAll('button[clrTabLink]')[1];
    this.lazyNoRouteTab = this.mfe.nativeElement.querySelectorAll('button[clrTabLink]')[2];
  }

  @Input()
  set selectedTab(value) {
    switch(value) {
      case '0' :
        this.datagridTab.click();
        break;
      case '1':
        this.lazyRouteTab.click();
        break;
      case '2':
        this.lazyNoRouteTab.click();
    }
  }

  ngOnInit() {
  }

}
