import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeProfileComponent } from './fe-profile.component';

describe('FeProfileComponent', () => {
  let component: FeProfileComponent;
  let fixture: ComponentFixture<FeProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
