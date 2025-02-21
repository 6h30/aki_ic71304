import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeMessagesComponent } from './fe-messages.component';

describe('FeMessagesComponent', () => {
  let component: FeMessagesComponent;
  let fixture: ComponentFixture<FeMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeMessagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
