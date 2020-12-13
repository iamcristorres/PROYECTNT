import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/autenticacion/services/autenticacion.service';
import { Docente } from 'src/app/models/docente.model';
import { DocentesService } from 'src/app/services/docentes.service';

@Component({
  selector: 'app-listado-docentes',
  templateUrl: './listado-docentes.component.html',
  styleUrls: ['./listado-docentes.component.css'],
  providers: [AutenticacionService]
})
export class ListadoDocentesComponent implements OnInit {
  public isLogged = false;
  public user = null;
  docentesTodos: any[] = [];
  constructor(private docenteService: DocentesService,
    private autenticacion: AutenticacionService,
    private router: Router) { }

    async ngOnInit() {
      this.user = await this.autenticacion.getUsuarioActual();
      if (this.user) {
        this.isLogged = true;
      }

      this.docenteService.getAllDocentes().subscribe(data => {
        this.docentesTodos = data.map(e => {
          console.log('ALL DOCENTES');
          return {
            id: e.payload.doc.id, ...e.payload.doc.data() as Docente
          };
        });
      });
    }

  doDeleteDocente(id: string) {
    this.docenteService.deleteDocente(id).then(
      res => {
        this.router.navigate(['/listaDocentes']);
      },
      err => {
        console.log(err);
      }
    );
  }


}
