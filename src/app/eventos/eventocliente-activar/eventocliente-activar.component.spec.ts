import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoclienteActivarComponent } from './eventocliente-activar.component';

describe('EventoclienteActivarComponent', () => {
  let component: EventoclienteActivarComponent;
  let fixture: ComponentFixture<EventoclienteActivarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoclienteActivarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoclienteActivarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
