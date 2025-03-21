import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-mensaje',
  standalone: true,
  imports: [],
  templateUrl: './mostrar-mensaje.component.html',
  styleUrl: './mostrar-mensaje.component.css'
})
export class MostrarMensajeComponent {
mensaje: string = '';

resetearMensaje() {
  //Reiniciar Mensaje
  this.mensaje= '';
}
mostrarMensaje() {
this.mensaje ='Hola, has hecho click sobre el boton'
}


}
