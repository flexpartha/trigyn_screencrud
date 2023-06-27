import { TestBed } from '@angular/core/testing';

import { CounterLibService } from './counter-lib.service';

describe('CounterLibService', () => {
  let service: CounterLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
