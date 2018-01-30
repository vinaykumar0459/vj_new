import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GownComponent } from './gown.component';

describe('GownComponent', () => {
  let component: GownComponent;
  let fixture: ComponentFixture<GownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
