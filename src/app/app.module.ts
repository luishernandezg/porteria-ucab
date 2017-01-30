import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

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
import { EstadisticasComponent } from './estadisticas/estadisticas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MatriculaComponent,
    ModificarDatosperonalesComponent,
    CambiarContrasenaComponent,
    ResgistroComponent,
    MenuComponent,
    TopBarComponent,
    PasesComponent,
    EstacionamientoComponent,
    EstadisticasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
