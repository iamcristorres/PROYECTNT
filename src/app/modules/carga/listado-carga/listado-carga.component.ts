import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/autenticacion/services/autenticacion.service';
import { Carga } from 'src/app/models/carga.model';
import { CargaService } from 'src/app/services/carga.service';

@Component({
  selector: 'app-listado-carga',
  templateUrl: './listado-carga.component.html',
  styleUrls: ['./listado-carga.component.css'],
  providers: [AutenticacionService]
})
export class ListadoCargaComponent implements OnInit {
  public isLogged = false;
  public user = null;
  cargasTodos: any[] = [];
  constructor(private cargaService: CargaService,
    private autenticacion: AutenticacionService,
    private router: Router) { }

    async ngOnInit() {
      this.user = await this.autenticacion.getUsuarioActual();
      if (this.user) {
        this.isLogged = true;
      }

      this.cargaService.getAllCargas().subscribe(data => {
        this.cargasTodos = data.map(e => {
          console.log('ALL CARGAS');
          return {
            id: e.payload.doc.id, ...e.payload.doc.data() as Carga
          };
        });
      });
    }

  doDeleteCarga(id: string) {
    this.cargaService.deleteCarga(id).then(
      res => {
        this.router.navigate(['/listaCargas']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
