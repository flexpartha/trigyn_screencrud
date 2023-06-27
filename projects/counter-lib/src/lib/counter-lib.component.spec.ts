import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterLibComponent } from './counter-lib.component';

describe('CounterLibComponent', () => {
  let component: CounterLibComponent;
  let fixture: ComponentFixture<CounterLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterLibComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
