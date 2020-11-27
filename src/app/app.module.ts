import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';

//Importamos la constante ROUTES y el modulo para manejar rutas
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';

//Para que se puedan realizar las peticiones HTTP
import { HttpClientModule } from '@angular/common/http';

//Para tener un formulario reactivo
import { ReactiveFormsModule } from '@angular/forms';

import { BuscarComponent } from './components/buscar/buscar.component';
import { AboutComponent } from './components/about/about.component';
import { AgenteComponent } from './components/agente/agente.component';
import { RegistroComponent } from './components/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    BuscarComponent,
    AboutComponent,
    AgenteComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
