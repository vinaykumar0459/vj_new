import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheLabelComponent } from './the-label.component';

describe('TheLabelComponent', () => {
  let component: TheLabelComponent;
  let fixture: ComponentFixture<TheLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
