import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agente',
  templateUrl: './agente.component.html',
  styleUrls: ['./agente.component.css']
})
export class AgenteComponent implements OnInit {

  Agente: any = [];
  infoActiva: boolean;

  constructor(private _usuarios: UsuariosService, private _aroute: ActivatedRoute) {
    this.infoActiva = true;
    this._aroute.params.subscribe(params => {
      this._usuarios.getIndividual(params['id']).subscribe((data: any) => {
        this.Agente = data;
      })
    })
  }

  ngOnInit(): void {
  }

  infoDestroy(id){
    this._usuarios.deleteAgent(id);
    this.infoActiva = false;
  }
}
