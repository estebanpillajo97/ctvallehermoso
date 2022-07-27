import { TestBed } from '@angular/core/testing';

import { ReservaClienteService } from './reserva-cliente.service';

describe('ReservaClienteService', () => {
  let service: ReservaClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservaClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
