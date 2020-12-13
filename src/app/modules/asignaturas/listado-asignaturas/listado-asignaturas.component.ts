import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/autenticacion/services/autenticacion.service';
import { Asignatura } from 'src/app/models/asignatura.model';
import { AsignaturasService } from 'src/app/services/asignaturas.service';

@Component({
  selector: 'app-listado-asignaturas',
  templateUrl: './listado-asignaturas.component.html',
  styleUrls: ['./listado-asignaturas.component.css'],
  providers: [AutenticacionService]
})
export class ListadoAsignaturasComponent implements OnInit {
  public isLogged = false;
  public user = null;
  asignaturasTodos: any[] = [];
  constructor(private asignaturaService: AsignaturasService,
    private autenticacion: AutenticacionService,
    private router: Router) { }

    async ngOnInit() {
      this.user = await this.autenticacion.getUsuarioActual();
      if (this.user) {
        this.isLogged = true;
      }

      this.asignaturaService.getAllAsignaturas().subscribe(data => {
        this.asignaturasTodos = data.map(e => {
          console.log('ALL Asignaturas');
          return {
            id: e.payload.doc.id, ...e.payload.doc.data() as Asignatura
          };
        });
      });
    }

  doDeleteAsignatura(id: string) {
    this.asignaturaService.deleteAsignatura(id).then(
      res => {
        this.router.navigate(['/listaAsignaturas']);
      },
      err => {
        console.log(err);
      }
    );
  }




}
