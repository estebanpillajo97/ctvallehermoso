import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormreservacionesComponent } from './formreservaciones.component';

describe('FormreservacionesComponent', () => {
  let component: FormreservacionesComponent;
  let fixture: ComponentFixture<FormreservacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormreservacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormreservacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
