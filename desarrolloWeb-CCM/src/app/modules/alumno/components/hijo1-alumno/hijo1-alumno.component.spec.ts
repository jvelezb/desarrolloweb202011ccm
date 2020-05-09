import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hijo1AlumnoComponent } from './hijo1-alumno.component';

describe('Hijo1AlumnoComponent', () => {
  let component: Hijo1AlumnoComponent;
  let fixture: ComponentFixture<Hijo1AlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hijo1AlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hijo1AlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
