import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroFrontendComponent } from './micro-frontend.component';

describe('MicroFrontendComponent', () => {
  let component: MicroFrontendComponent;
  let fixture: ComponentFixture<MicroFrontendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicroFrontendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
