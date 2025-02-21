import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsDiscussionComponent } from './lms-discussion.component';

describe('LmsDiscussionComponent', () => {
  let component: LmsDiscussionComponent;
  let fixture: ComponentFixture<LmsDiscussionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LmsDiscussionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LmsDiscussionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
