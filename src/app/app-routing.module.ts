import { ModificadoclienteComponent } from './modules/clientes/modificadocliente/modificadocliente.component';
import { LoginComponent } from './autenticacion/login/login.component';
import { ListadoClientesComponent } from './modules/clientes/listado-clientes/listado-clientes.component';
import { NuevoClienteComponent } from './modules/clientes/nuevo-cliente/nuevo-cliente.component';
import { PersonasComponent } from './components/personas/personas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginadminComponent } from './modules/login/loginadmin/loginadmin.component';
import { WelcomeComponent } from './modules/welcome/welcome.component';
import { InicioComponent } from './modules/inicio/inicio.component';
import { ListadoDocentesComponent } from './modules/docentes/listado-docentes/listado-docentes.component';
import { NuevoDocenteComponent } from './modules/docentes/nuevo-docente/nuevo-docente.component';
import { ModificarDocenteComponent } from './modules/docentes/modificar-docente/modificar-docente.component';
import { ListadoAsignaturasComponent } from './modules/asignaturas/listado-asignaturas/listado-asignaturas.component';
import { NuevoAsignaturaComponent } from './modules/asignaturas/nuevo-asignatura/nuevo-asignatura.component';
import { ModificarAsignaturaComponent } from './modules/asignaturas/modificar-asignatura/modificar-asignatura.component';
import { ListadoCargaComponent } from './modules/carga/listado-carga/listado-carga.component';
import { NuevoCargaComponent } from './modules/carga/nuevo-carga/nuevo-carga.component';
import { ModificarCargaComponent } from './modules/carga/modificar-carga/modificar-carga.component';
import { RegistroComponent } from './modules/registro/registro.component';
const routes: Routes = [
  { path: 'personas', component: PersonasComponent },
  { path: 'clienteNuevo', component: NuevoClienteComponent },
  { path: 'listaClientes', component: ListadoClientesComponent },
  { path: '', component: LoginComponent },
  { path: 'login', loadChildren: () => import('./autenticacion/login/login.module').then(m => m.LoginModule) },
  { path: 'registro', loadChildren: () => import('./autenticacion/registro/registro.module').then(m => m.RegistroModule) },
  { path: 'modificaCliente/:ids', component: ModificadoclienteComponent},


  { path: 'loginadmin', component: LoginadminComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path: 'inicio', component: InicioComponent},

  { path: 'registeradmin', component: RegistroComponent},

  { path: 'listaDocentes', component: ListadoDocentesComponent},
  { path: 'docenteNuevo', component: NuevoDocenteComponent},
  { path: 'modificaDocente/:ids', component: ModificarDocenteComponent},

  { path: 'listaAsignaturas', component: ListadoAsignaturasComponent},
  { path: 'asignaturaNuevo', component: NuevoAsignaturaComponent},
  { path: 'modificaAsignatura/:ids', component: ModificarAsignaturaComponent},

  { path: 'listaCarga', component: ListadoCargaComponent},
  { path: 'cargaNuevo', component: NuevoCargaComponent},
  { path: 'modificaCarga/:ids', component: ModificarCargaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
