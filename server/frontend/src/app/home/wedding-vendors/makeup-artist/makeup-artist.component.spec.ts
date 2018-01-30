import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeupArtistComponent } from './makeup-artist.component';

describe('MakeupArtistComponent', () => {
  let component: MakeupArtistComponent;
  let fixture: ComponentFixture<MakeupArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeupArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeupArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
