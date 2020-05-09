import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hijo2AlumnoComponent } from './hijo2-alumno.component';

describe('Hijo2AlumnoComponent', () => {
  let component: Hijo2AlumnoComponent;
  let fixture: ComponentFixture<Hijo2AlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hijo2AlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hijo2AlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
