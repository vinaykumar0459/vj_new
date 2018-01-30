import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingJewelleryComponent } from './wedding-jewellery.component';

describe('WeddingJewelleryComponent', () => {
  let component: WeddingJewelleryComponent;
  let fixture: ComponentFixture<WeddingJewelleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingJewelleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingJewelleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
