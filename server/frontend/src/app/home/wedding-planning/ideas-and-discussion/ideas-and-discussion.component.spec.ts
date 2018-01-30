import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeasAndDiscussionComponent } from './ideas-and-discussion.component';

describe('IdeasAndDiscussionComponent', () => {
  let component: IdeasAndDiscussionComponent;
  let fixture: ComponentFixture<IdeasAndDiscussionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdeasAndDiscussionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdeasAndDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
