import { Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { AboutComponent } from './components/about/about.component';
import { AgenteComponent } from './components/agente/agente.component';
import { RegistroComponent } from './components/registro/registro.component';

//Exportamos constante de rutas
export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'buscar', component: BuscarComponent},
    {path: 'about', component: AboutComponent},
    {path: 'agente/:id', component: AgenteComponent},
    {path: 'registro', component: RegistroComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'}
];