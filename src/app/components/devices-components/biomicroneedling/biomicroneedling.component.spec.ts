import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiomicroneedlingComponent } from './biomicroneedling.component';

describe('BiomicroneedlingComponent', () => {
  let component: BiomicroneedlingComponent;
  let fixture: ComponentFixture<BiomicroneedlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiomicroneedlingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiomicroneedlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
