import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidarPassService {

  constructor() { }

  //Validamos la contraseña y la confirmación de la misma
  confirmarPass(clave: string, confirmacion: string){
    return (formGroup: FormGroup) => {
      const inputClave = formGroup.controls[clave];
      const inputConfirmacion = formGroup.controls[confirmacion];

      if(inputClave.value === inputConfirmacion.value){
        inputConfirmacion.setErrors(null);
      }
      else{
        inputConfirmacion.setErrors({claveError: true});
      }
    }
  }
}
