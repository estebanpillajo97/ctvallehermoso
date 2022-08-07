import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoSubmenusComponent } from './listado-submenus.component';

describe('ListadoSubmenusComponent', () => {
  let component: ListadoSubmenusComponent;
  let fixture: ComponentFixture<ListadoSubmenusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoSubmenusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoSubmenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
