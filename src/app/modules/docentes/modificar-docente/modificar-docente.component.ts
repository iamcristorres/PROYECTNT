import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import { Docente } from 'src/app/models/docente.model';
import { DocentesService } from 'src/app/services/docentes.service';

@Component({
  selector: 'app-modificar-docente',
  templateUrl: './modificar-docente.component.html',
  styleUrls: ['./modificar-docente.component.css']
})
export class ModificarDocenteComponent implements OnInit {
  docenteId: string;
  docente: AngularFirestoreDocument<any>;
  objeto: Docente;
  conId = false;

  constructor(private actRoute: ActivatedRoute,
    private clienteService: DocentesService,
    private route: Router) { }

    async ngOnInit() {
      this.actRoute.paramMap.subscribe(params => {
        this.docenteId = params.get('ids');
      });
      this.objeto = this.clienteService.loadDocente(this.docenteId);
    }

    loadDataDocente(id: string) {
      this.objeto = this.clienteService.loadDocente(id);
      if (!this.conId) {
        this.conId = true;
      }
    }

    updateDocente(id: string, codigo: number, apellido: string, nombre: string, correo:string, telefono:string, direccion:String){
      this.clienteService.updateOneDocente(id, codigo, apellido, nombre, correo, telefono, direccion);
      this.route.navigate(['/listaDocentes']);
    }



}
