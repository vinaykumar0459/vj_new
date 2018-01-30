import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingLeadsComponent } from './wedding-leads.component';

describe('WeddingLeadsComponent', () => {
  let component: WeddingLeadsComponent;
  let fixture: ComponentFixture<WeddingLeadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingLeadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
