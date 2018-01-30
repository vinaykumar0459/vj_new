import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingVendorsPageComponent } from './wedding-vendors-page.component';

describe('WeddingVendorsPageComponent', () => {
  let component: WeddingVendorsPageComponent;
  let fixture: ComponentFixture<WeddingVendorsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingVendorsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingVendorsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
