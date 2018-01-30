import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingDecoratorsComponent } from './wedding-decorators.component';

describe('WeddingDecoratorsComponent', () => {
  let component: WeddingDecoratorsComponent;
  let fixture: ComponentFixture<WeddingDecoratorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingDecoratorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingDecoratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
