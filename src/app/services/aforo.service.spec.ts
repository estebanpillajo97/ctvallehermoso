import { TestBed } from '@angular/core/testing';

import { AforoService } from './aforo.service';

describe('AforoService', () => {
  let service: AforoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AforoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
