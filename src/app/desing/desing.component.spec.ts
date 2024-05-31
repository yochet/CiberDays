import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesingComponent } from './desing.component';

describe('DesingComponent', () => {
  let component: DesingComponent;
  let fixture: ComponentFixture<DesingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesingComponent]
    });
    fixture = TestBed.createComponent(DesingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
