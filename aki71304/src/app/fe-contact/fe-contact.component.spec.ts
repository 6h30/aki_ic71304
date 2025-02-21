import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeContactComponent } from './fe-contact.component';

describe('FeContactComponent', () => {
  let component: FeContactComponent;
  let fixture: ComponentFixture<FeContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
