import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsubmenusComponent } from './formsubmenus.component';

describe('FormsubmenusComponent', () => {
  let component: FormsubmenusComponent;
  let fixture: ComponentFixture<FormsubmenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsubmenusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsubmenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
