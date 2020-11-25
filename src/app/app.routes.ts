import { Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { AboutComponent } from './components/about/about.component';

//Exportamos constante de rutas
export const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'buscar', component: BuscarComponent},
    {path: 'about', component: AboutComponent},
    {path: '', pathMatch: 'full', redirectTo: 'home'}
];