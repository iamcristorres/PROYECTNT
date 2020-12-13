import { ModificadoclienteComponent } from './modules/clientes/modificadocliente/modificadocliente.component';
import { ListadoClientesComponent } from './modules/clientes/listado-clientes/listado-clientes.component';
import { NuevoClienteComponent } from './modules/clientes/nuevo-cliente/nuevo-cliente.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from './../environments/environment';
import { LoginadminComponent } from './modules/login/loginadmin/loginadmin.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { InicioComponent } from './modules/inicio/inicio.component';
import { ListadoDocentesComponent } from './modules/docentes/listado-docentes/listado-docentes.component';
import { NuevoDocenteComponent } from './modules/docentes/nuevo-docente/nuevo-docente.component';

import { DataTablesModule } from 'angular-datatables';
import { ModificarDocenteComponent } from './modules/docentes/modificar-docente/modificar-docente.component';
import { ListadoAsignaturasComponent } from './modules/asignaturas/listado-asignaturas/listado-asignaturas.component';
import { NuevoAsignaturaComponent } from './modules/asignaturas/nuevo-asignatura/nuevo-asignatura.component';
import { ModificarAsignaturaComponent } from './modules/asignaturas/modificar-asignatura/modificar-asignatura.component';
import { ListadoCargaComponent } from './modules/carga/listado-carga/listado-carga.component';
import { ModificarCargaComponent } from './modules/carga/modificar-carga/modificar-carga.component';
import { NuevoCargaComponent } from './modules/carga/nuevo-carga/nuevo-carga.component';
import { RegistroComponent } from './modules/registro/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    NuevoClienteComponent,
    ListadoClientesComponent,
    ModificadoclienteComponent,
    LoginadminComponent,
    WelcomeComponent,
    InicioComponent,
    ListadoDocentesComponent,
    NuevoDocenteComponent,
    ModificarDocenteComponent,
    ListadoAsignaturasComponent,
    NuevoAsignaturaComponent,
    ModificarAsignaturaComponent,
    ListadoCargaComponent,
    ModificarCargaComponent,
    NuevoCargaComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [WelcomeComponent],
})
export class AppModule { }
export class WelcomeModule {}
