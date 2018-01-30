import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingInvitationsComponent } from './wedding-invitations.component';

describe('WeddingInvitationsComponent', () => {
  let component: WeddingInvitationsComponent;
  let fixture: ComponentFixture<WeddingInvitationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingInvitationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingInvitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
