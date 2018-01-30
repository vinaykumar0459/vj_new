import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingPlanningComponent } from './wedding-planning.component';

describe('WeddingPlanningComponent', () => {
  let component: WeddingPlanningComponent;
  let fixture: ComponentFixture<WeddingPlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingPlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
