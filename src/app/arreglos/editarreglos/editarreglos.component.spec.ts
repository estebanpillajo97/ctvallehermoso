import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarreglosComponent } from './editarreglos.component';

describe('EditarreglosComponent', () => {
  let component: EditarreglosComponent;
  let fixture: ComponentFixture<EditarreglosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarreglosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarreglosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
