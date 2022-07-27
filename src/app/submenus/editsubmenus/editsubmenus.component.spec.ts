import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditsubmenusComponent } from './editsubmenus.component';

describe('EditsubmenusComponent', () => {
  let component: EditsubmenusComponent;
  let fixture: ComponentFixture<EditsubmenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditsubmenusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditsubmenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
