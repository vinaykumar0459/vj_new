import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheLabelPageComponent } from './the-label-page.component';

describe('TheLabelPageComponent', () => {
  let component: TheLabelPageComponent;
  let fixture: ComponentFixture<TheLabelPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheLabelPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheLabelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
