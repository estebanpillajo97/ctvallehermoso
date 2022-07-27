import { TestBed } from '@angular/core/testing';

import { ArreglosService } from './arreglos.service';

describe('ArreglosService', () => {
  let service: ArreglosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArreglosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
