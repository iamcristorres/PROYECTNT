import { Component, OnInit } from '@angular/core';
import { Asignatura } from 'src/app/models/asignatura.model';
import { AsignaturasService } from 'src/app/services/asignaturas.service';

@Component({
  selector: 'app-nuevo-asignatura',
  templateUrl: './nuevo-asignatura.component.html',
  styleUrls: ['./nuevo-asignatura.component.css']
})
export class NuevoAsignaturaComponent implements OnInit {

  asignatura: Asignatura = new Asignatura();
  submitted: boolean = false;

  constructor(private asignaturaService: AsignaturasService) { }

  ngOnInit(): void {
  }

  doCreateAsignatura(asignatura: Asignatura): void {
    this.asignaturaService.createAsignatura(this.asignatura);
    this.submitted = true;
  }

  newAsignatura(): void {
    this.submitted = false;
  }

}

