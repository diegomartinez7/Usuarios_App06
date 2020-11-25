import { Component, OnInit } from '@angular/core';

//Importamos el servicio
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ArrayUsuarios: any = [];

  constructor(private _usuario: UsuariosService) {
    this._usuario.getAgents().subscribe((data: any) => {
      console.log(data);
    });
    this.ArrayUsuarios = this._usuario.getAgents();
  }

  ngOnInit(): void {
  }

}
