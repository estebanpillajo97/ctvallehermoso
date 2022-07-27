import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditusuariosComponent } from './editusuarios.component';

describe('EditusuariosComponent', () => {
  let component: EditusuariosComponent;
  let fixture: ComponentFixture<EditusuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditusuariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditusuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
