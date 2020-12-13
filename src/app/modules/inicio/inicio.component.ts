import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/autenticacion/services/autenticacion.service';
import { Cliente } from '../clientes/cliente.model';
import { ClientesService } from '../clientes/clientes.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  providers: [AutenticacionService]
})
export class InicioComponent implements OnInit {
  public user = null;
  public isLogged = false;
  clientesTodos: any[] = [];

  constructor(private clienteService: ClientesService,
    private autenticacion: AutenticacionService,
    private router: Router) { }

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
