import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UipathDashboardComponent } from './uipath-dashboard.component';

describe('UipathDashboardComponent', () => {
  let component: UipathDashboardComponent;
  let fixture: ComponentFixture<UipathDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UipathDashboardComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UipathDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
