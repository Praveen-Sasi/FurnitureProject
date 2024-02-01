import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarSlideComponent } from './car-slide.component';

describe('CarSlideComponent', () => {
  let component: CarSlideComponent;
  let fixture: ComponentFixture<CarSlideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarSlideComponent]
    });
    fixture = TestBed.createComponent(CarSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
