import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientesService } from './clientes.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoClienteComponent } from './nuevo-cliente/nuevo-cliente.component';
import { ListadoClientesComponent } from './listado-clientes/listado-clientes.component';
import { ModificadoclienteComponent } from './modificadocliente/modificadocliente.component';

const routes: Routes = [

];


@NgModule({
  declarations: [NuevoClienteComponent,
    ListadoClientesComponent,
    ModificadoclienteComponent,
    RouterModule],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ClientesService
  ]
})
export class ClientesModule { }
