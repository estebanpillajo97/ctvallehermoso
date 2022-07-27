import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmenusComponent } from './editmenus.component';

describe('EditmenusComponent', () => {
  let component: EditmenusComponent;
  let fixture: ComponentFixture<EditmenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditmenusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
