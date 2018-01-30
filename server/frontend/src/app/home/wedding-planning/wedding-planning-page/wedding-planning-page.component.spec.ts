import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingPlanningPageComponent } from './wedding-planning-page.component';

describe('WeddingPlanningPageComponent', () => {
  let component: WeddingPlanningPageComponent;
  let fixture: ComponentFixture<WeddingPlanningPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingPlanningPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingPlanningPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
