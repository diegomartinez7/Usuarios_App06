import { Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';

//Exportamos constante de rutas
export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'buscar', component: BuscarComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'}
];