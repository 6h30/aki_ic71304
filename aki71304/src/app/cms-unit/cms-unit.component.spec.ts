import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsUnitComponent } from './cms-unit.component';

describe('CmsUnitComponent', () => {
  let component: CmsUnitComponent;
  let fixture: ComponentFixture<CmsUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmsUnitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmsUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
