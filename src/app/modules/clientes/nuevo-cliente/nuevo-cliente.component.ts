import { Cliente, Categoria } from './../cliente.model';
import { ClientesService } from './../clientes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent implements OnInit {

  cliente: Cliente = new Cliente();
  submitted: boolean = false;
  categoriasTodas: any;

  constructor(private clienteService: ClientesService) {}

  ngOnInit(): void {
    this.clienteService.getAllCategorias().subscribe(data => {
      this.categoriasTodas = data.map(e => {
        return {
          id: e.payload.doc.id, ...e.payload.doc.data() as Categoria
        };
      });
    });
  }

  doCreateCliente(cliente: Cliente): void {
    this.clienteService.createCliente(this.cliente);
    this.submitted = true;
  }

  newCliente(): void {
    this.submitted = false;
  }
}
