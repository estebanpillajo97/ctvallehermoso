import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaclienteActivarComponent } from './reservacliente-activar.component';

describe('ReservaclienteActivarComponent', () => {
  let component: ReservaclienteActivarComponent;
  let fixture: ComponentFixture<ReservaclienteActivarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservaclienteActivarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaclienteActivarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
