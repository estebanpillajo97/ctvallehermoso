import { TestBed } from '@angular/core/testing';

import { EventoClienteService } from './evento-cliente.service';

describe('EventoClienteService', () => {
  let service: EventoClienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventoClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
