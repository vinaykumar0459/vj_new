import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingPhotographersComponent } from './wedding-photographers.component';

describe('WeddingPhotographersComponent', () => {
  let component: WeddingPhotographersComponent;
  let fixture: ComponentFixture<WeddingPhotographersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingPhotographersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingPhotographersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
