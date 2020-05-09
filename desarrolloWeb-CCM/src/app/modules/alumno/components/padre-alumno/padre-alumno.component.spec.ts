import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreAlumnoComponent } from './padre-alumno.component';

describe('PadreAlumnoComponent', () => {
  let component: PadreAlumnoComponent;
  let fixture: ComponentFixture<PadreAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadreAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
