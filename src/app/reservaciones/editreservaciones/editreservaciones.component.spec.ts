import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditreservacionesComponent } from './editreservaciones.component';

describe('EditreservacionesComponent', () => {
  let component: EditreservacionesComponent;
  let fixture: ComponentFixture<EditreservacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditreservacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditreservacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
