import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurbridesComponent } from './ourbrides.component';

describe('OurbridesComponent', () => {
  let component: OurbridesComponent;
  let fixture: ComponentFixture<OurbridesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurbridesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurbridesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
