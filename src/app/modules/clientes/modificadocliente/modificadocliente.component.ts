import { ClientesService } from './../clientes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-modificadocliente',
  templateUrl: './modificadocliente.component.html',
  styleUrls: ['./modificadocliente.component.css']
})
export class ModificadoclienteComponent implements OnInit {

  clienteId: string;
  cliente: AngularFirestoreDocument<any>;
  objeto: Cliente;
  conId = false;

  constructor(private actRoute: ActivatedRoute,
    private clienteService: ClientesService,
    private route: Router) {
    // this.clienteId = this.actRoute.snapshot.params.id;


  }


  async ngOnInit() {
    this.actRoute.paramMap.subscribe(params => {
      this.clienteId = params.get('ids');
    });
    this.objeto = this.clienteService.loadCliente(this.clienteId);
  }

  loadDataCliente(id: string) {
    this.objeto = this.clienteService.loadCliente(id);
    if (!this.conId) {
      this.conId = true;
    }
  }

  updateCliente(id: string, nombre: string, cedula: number, direccion: string){
    this.clienteService.updateOneCliente(id, nombre, cedula, direccion);
    this.route.navigate(['/listaClientes']);
  }

}
