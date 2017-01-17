import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { ModificarDatosperonalesComponent } from './modificar-datosperonales/modificar-datosperonales.component';
import { CambiarContrasenaComponent } from './cambiar-contrasena/cambiar-contrasena.component';
import { ResgistroComponent } from './resgistro/resgistro.component';
import { MenuComponent } from './menu/menu.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PasesComponent } from './pases/pases.component';
import { EstacionamientoComponent } from './estacionamiento/estacionamiento.component';

const appRoutes: Routes = [
  {
  path: '',redirectTo: '/login',pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'resgistro', component: ResgistroComponent },
  { path: 'matricula', component: MatriculaComponent },
  { path: 'mod-datos-personales', component:  ModificarDatosperonalesComponent },
  { path: 'mod-contrasena', component:  CambiarContrasenaComponent },
  { path: 'pases', component:  PasesComponent },
  { path: 'estacionamiento', component:  EstacionamientoComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}