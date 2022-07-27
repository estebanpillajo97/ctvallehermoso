import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormmenusComponent } from './formmenus.component';

describe('FormmenusComponent', () => {
  let component: FormmenusComponent;
  let fixture: ComponentFixture<FormmenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormmenusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormmenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
