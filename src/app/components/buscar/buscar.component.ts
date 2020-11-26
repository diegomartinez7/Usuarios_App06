import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor(private _usuario: UsuariosService, private _router: Router) { }

  ArrayResultados: any = [];
  arreglo: any = [];

  ngOnInit(): void {
  }

  hacerBusqueda(term){
    this.ArrayResultados = [];
    if(term === '')
      return this.ArrayResultados;
    this._usuario.getAgents().subscribe((data: any) => {
      this.arreglo = data;
    });

    for(let i of this.arreglo){
      if(i['first_name'].toLowerCase().indexOf(term.toLowerCase()) != -1 || i['id']==term){
        this.ArrayResultados.push(i);
      }
    }
  }

  contactar(id){
    this._router.navigate(['/agente',id]);
  }

}
