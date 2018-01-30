import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionBlogComponent } from './fashion-blog.component';

describe('FashionBlogComponent', () => {
  let component: FashionBlogComponent;
  let fixture: ComponentFixture<FashionBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FashionBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
