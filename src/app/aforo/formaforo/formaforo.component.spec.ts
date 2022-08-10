import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaforoComponent } from './formaforo.component';

describe('FormaforoComponent', () => {
  let component: FormaforoComponent;
  let fixture: ComponentFixture<FormaforoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormaforoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaforoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
