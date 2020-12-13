import { Component, OnInit } from '@angular/core';
import { Asignatura } from 'src/app/models/asignatura.model';
import { Carga } from 'src/app/models/carga.model';
import { Docente } from 'src/app/models/docente.model';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { CargaService } from 'src/app/services/carga.service';
import { DocentesService } from 'src/app/services/docentes.service';

@Component({
  selector: 'app-nuevo-carga',
  templateUrl: './nuevo-carga.component.html',
  styleUrls: ['./nuevo-carga.component.css']
})
export class NuevoCargaComponent implements OnInit {

carga: Carga = new Carga();
submitted: boolean = false;
cargasTodas: any;
asignaturasTodas: any;
docentesTodas: any;
constructor(private cargaService: CargaService, private docenteService:DocentesService, private asignaturaService:AsignaturasService) {}

ngOnInit(): void {
  this.docenteService.getAllDocentes().subscribe(data => {
    this.docentesTodas = data.map(e => {
      return {
        id: e.payload.doc.id, ...e.payload.doc.data() as Docente
      };
    });
  });
  this.asignaturaService.getAllAsignaturas().subscribe(data => {
    this.asignaturasTodas = data.map(e => {
      return {
        id: e.payload.doc.id, ...e.payload.doc.data() as Asignatura
      };
    });
  });
}

doCreateCarga(carga: Carga): void {
  this.cargaService.createCarga(this.carga);
  this.submitted = true;
}

newCarga(): void {
  this.submitted = false;
}

}
