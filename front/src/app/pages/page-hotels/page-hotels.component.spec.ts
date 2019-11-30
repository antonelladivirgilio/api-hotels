import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHotelsComponent } from './page-hotels.component';

describe('PageHotelsComponent', () => {
  let component: PageHotelsComponent;
  let fixture: ComponentFixture<PageHotelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageHotelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHotelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
