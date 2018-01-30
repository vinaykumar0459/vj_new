import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendAnEnquiryComponent } from './send-an-enquiry.component';

describe('SendAnEnquiryComponent', () => {
  let component: SendAnEnquiryComponent;
  let fixture: ComponentFixture<SendAnEnquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendAnEnquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendAnEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
