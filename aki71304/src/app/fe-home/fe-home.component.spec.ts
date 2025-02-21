import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeHomeComponent } from './fe-home.component';

describe('FeHomeComponent', () => {
  let component: FeHomeComponent;
  let fixture: ComponentFixture<FeHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
