import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Asignatura } from 'src/app/models/asignatura.model';
import { Carga } from 'src/app/models/carga.model';
import { Docente } from 'src/app/models/docente.model';
import { AsignaturasService } from 'src/app/services/asignaturas.service';
import { CargaService } from 'src/app/services/carga.service';
import { DocentesService } from 'src/app/services/docentes.service';

@Component({
  selector: 'app-modificar-carga',
  templateUrl: './modificar-carga.component.html',
  styleUrls: ['./modificar-carga.component.css']
})
export class ModificarCargaComponent implements OnInit {
  cargaId: string;
  carga: AngularFirestoreDocument<any>;
  objeto: Carga;
  conId = false;

  asignaturasTodas: any;
  docentesTodas: any;

  constructor(private actRoute: ActivatedRoute,
    private cargaService: CargaService,
    private route: Router,
    private docenteService:DocentesService, private asignaturaService:AsignaturasService) { }

    ngOnInit():void {
      this.actRoute.paramMap.subscribe(params => {
        this.cargaId = params.get('ids');
      });
      this.objeto = this.cargaService.loadCarga(this.cargaId);

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

    loadDataCarga(id: string) {
      this.objeto = this.cargaService.loadCarga(id);
      if (!this.conId) {
        this.conId = true;
      }
    }

    updateCarga(id: string, asignatura: string, docente: string){
      this.cargaService.updateOneCargas(id, asignatura, docente);
      this.route.navigate(['/listaCarga']);
    }



}
