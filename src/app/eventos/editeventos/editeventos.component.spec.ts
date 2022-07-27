import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeventosComponent } from './editeventos.component';

describe('EditeventosComponent', () => {
  let component: EditeventosComponent;
  let fixture: ComponentFixture<EditeventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
