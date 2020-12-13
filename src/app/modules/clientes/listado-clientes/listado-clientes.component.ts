import { Cliente } from './../cliente.model';
import { AutenticacionService } from './../../../autenticacion/services/autenticacion.service';
import { ClientesService } from './../clientes.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-clientes',
  templateUrl: './listado-clientes.component.html',
  styleUrls: ['./listado-clientes.component.css'],
  providers: [AutenticacionService]
})


export class ListadoClientesComponent implements OnInit {

  public isLogged = false;
  public user = null;
  clientesTodos: any[] = [];

  constructor(private clienteService: ClientesService,
              private autenticacion: AutenticacionService,
              private router: Router
  ) {}



  doDeleteCliente(id: string) {
    this.clienteService.deleteCliente(id).then(
      res => {
        this.router.navigate(['/listaClientes']);
      },
      err => {
        console.log(err);
      }
    );
  }




  async ngOnInit() {
    this.user = await this.autenticacion.getUsuarioActual();
    if (this.user) {
      this.isLogged = true;
    }

    this.clienteService.getAllClientes().subscribe(data => {
      this.clientesTodos = data.map(e => {
        console.log('ALL CLIENTES');
        return {
          id: e.payload.doc.id, ...e.payload.doc.data() as Cliente
        };
      });
    });
  }

}

