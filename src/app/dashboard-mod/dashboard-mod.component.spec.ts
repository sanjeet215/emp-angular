import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardModComponent } from './dashboard-mod.component';

describe('DashboardModComponent', () => {
  let component: DashboardModComponent;
  let fixture: ComponentFixture<DashboardModComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardModComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardModComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
