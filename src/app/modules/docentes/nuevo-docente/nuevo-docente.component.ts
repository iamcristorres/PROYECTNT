import { Component, OnInit } from '@angular/core';
import { Docente } from 'src/app/models/docente.model';
import { DocentesService } from 'src/app/services/docentes.service';

@Component({
  selector: 'app-nuevo-docente',
  templateUrl: './nuevo-docente.component.html',
  styleUrls: ['./nuevo-docente.component.css']
})
export class NuevoDocenteComponent implements OnInit {
  docente: Docente = new Docente();
  submitted: boolean = false;

  constructor(private docenteService: DocentesService) { }

  ngOnInit(): void {
  }

  doCreateDocente(docente: Docente): void {
    this.docenteService.createDocente(this.docente);
    this.submitted = true;
  }

  newDocente(): void {
    this.submitted = false;
  }

}
