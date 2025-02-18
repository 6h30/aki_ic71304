import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuycoursesComponent } from './buycourses.component';

describe('BuycoursesComponent', () => {
  let component: BuycoursesComponent;
  let fixture: ComponentFixture<BuycoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuycoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuycoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
