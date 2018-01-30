import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingActivityComponent } from './wedding-activity.component';

describe('WeddingActivityComponent', () => {
  let component: WeddingActivityComponent;
  let fixture: ComponentFixture<WeddingActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
