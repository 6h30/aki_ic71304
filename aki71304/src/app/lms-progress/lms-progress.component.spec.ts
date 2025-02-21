import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsProgressComponent } from './lms-progress.component';

describe('LmsProgressComponent', () => {
  let component: LmsProgressComponent;
  let fixture: ComponentFixture<LmsProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LmsProgressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LmsProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
