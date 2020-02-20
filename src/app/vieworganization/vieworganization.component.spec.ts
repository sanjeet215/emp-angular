import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VieworganizationComponent } from './vieworganization.component';

describe('VieworganizationComponent', () => {
  let component: VieworganizationComponent;
  let fixture: ComponentFixture<VieworganizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VieworganizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VieworganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
