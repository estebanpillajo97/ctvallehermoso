import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoClienteComponent } from './evento-cliente.component';

describe('EventoClienteComponent', () => {
  let component: EventoClienteComponent;
  let fixture: ComponentFixture<EventoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
