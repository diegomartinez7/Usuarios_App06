import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Importamos el servicio
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ArrayUsuarios: any = [];

  constructor(private _usuario: UsuariosService, private _router: Router) {
    this._usuario.getAgents().subscribe((data: any) => {
      this.ArrayUsuarios = data;
    });
  }

  ngOnInit(): void {
  }

  contactar(id){
    this._router.navigate(['/agente',id]);
  }
}
