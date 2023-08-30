import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandombackgroundComponent } from './randombackground.component';

describe('RandombackgroundComponent', () => {
  let component: RandombackgroundComponent;
  let fixture: ComponentFixture<RandombackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandombackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandombackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
