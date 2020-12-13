import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Asignatura } from 'src/app/models/asignatura.model';
import { AsignaturasService } from 'src/app/services/asignaturas.service';

@Component({
  selector: 'app-modificar-asignatura',
  templateUrl: './modificar-asignatura.component.html',
  styleUrls: ['./modificar-asignatura.component.css']
})
export class ModificarAsignaturaComponent implements OnInit {
  asignaturaId: string;
  asignatura: AngularFirestoreDocument<any>;
  objeto: Asignatura;
  conId = false;

  constructor(private actRoute: ActivatedRoute,
    private asignaturaService: AsignaturasService,
    private route: Router) { }

    async ngOnInit() {
      this.actRoute.paramMap.subscribe(params => {
        this.asignaturaId = params.get('ids');
      });
      this.objeto = this.asignaturaService.loadAsignatura(this.asignaturaId);
    }

    loadDataAsignatura(id: string) {
      this.objeto = this.asignaturaService.loadAsignatura(id);
      if (!this.conId) {
        this.conId = true;
      }
    }

    updateAsignatura(id: string, nombre: string, ih: number){
      this.asignaturaService.updateOneAsignaturas(id, nombre, ih);
      this.route.navigate(['/listaAsignaturas']);
    }



}
