import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormarreglosComponent } from './formarreglos.component';

describe('FormarreglosComponent', () => {
  let component: FormarreglosComponent;
  let fixture: ComponentFixture<FormarreglosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormarreglosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormarreglosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
