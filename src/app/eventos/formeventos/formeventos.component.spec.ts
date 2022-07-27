import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormeventosComponent } from './formeventos.component';

describe('FormeventosComponent', () => {
  let component: FormeventosComponent;
  let fixture: ComponentFixture<FormeventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormeventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormeventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
