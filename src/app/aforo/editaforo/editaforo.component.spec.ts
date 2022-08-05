import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaforoComponent } from './editaforo.component';

describe('EditaforoComponent', () => {
  let component: EditaforoComponent;
  let fixture: ComponentFixture<EditaforoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaforoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaforoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
