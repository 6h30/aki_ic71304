import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeCourseDetailsComponent } from './fe-course-details.component';

describe('FeCourseDetailsComponent', () => {
  let component: FeCourseDetailsComponent;
  let fixture: ComponentFixture<FeCourseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeCourseDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeCourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
