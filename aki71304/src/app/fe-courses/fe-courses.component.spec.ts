import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeCoursesComponent } from './fe-courses.component';

describe('FeCoursesComponent', () => {
  let component: FeCoursesComponent;
  let fixture: ComponentFixture<FeCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
