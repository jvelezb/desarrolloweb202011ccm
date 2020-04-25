import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProfesorComponent } from './components/add-profesor/add-profesor.component';
import { EditProfesorComponent } from './components/edit-profesor/edit-profesor.component';



@NgModule({
  declarations: [AddProfesorComponent, EditProfesorComponent],
  imports: [
    CommonModule
  ]
})
export class ProfesoresModule { }
