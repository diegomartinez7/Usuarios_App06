import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ValidarPassService } from 'src/app/services/validarPass/validar-pass.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  //Variable del formulario
  form: FormGroup;

  constructor(private _formB: FormBuilder, private _usuarios: UsuariosService, private _valido: ValidarPassService) {
    this.crearForm();
  }

  ngOnInit(): void {
  }

  crearForm(){
    this.form = this._formB.group({
      nombre: ['', [Validators.required, Validators.minLength(9)]],
      trabajo: ['', [Validators.required, Validators.minLength(6)]],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      clave: ['', Validators.required],
      check_clave: ['', Validators.required]
    }, {
      validators: this._valido.confirmarPass('clave','check_clave')
    });
  }

  //Getters para validar los input del form
  get validNombre(){
    return this.form.get('nombre').invalid && this.form.get('nombre').touched;
  }

  get validTrabajo(){
    return this.form.get('trabajo').invalid && this.form.get('trabajo').touched;
  }

  get validCorreo(){
    return this.form.get('correo').invalid && this.form.get('correo').touched;
  }

  get validClave(){
    return this.form.get('clave').invalid && this.form.get('clave').touched;
  }

  get validCheck(){
    const clave = this.form.get('clave').value;
    const check_c = this.form.get('check_clave').value;
    return (clave === check_c)? false : true;
  }

  infoCreate(){
    if(!this.form.invalid){
      var objeto = {
        "name": this.form.get('nombre').value,
        "job": this.form.get('trabajo').value
      }

      this._usuarios.createAgent(objeto).subscribe((data: any) => {
        console.log(data);
      });
    }
  }
}
