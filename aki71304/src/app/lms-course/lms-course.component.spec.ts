import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsCourseComponent } from './lms-course.component';

describe('LmsCourseComponent', () => {
  let component: LmsCourseComponent;
  let fixture: ComponentFixture<LmsCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LmsCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LmsCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
