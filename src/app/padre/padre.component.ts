import { Component } from '@angular/core';
import { HijoComponent } from "./hijo/hijo.component";

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
mensaje : string ='';
mensajePadre : string  = 'Mensaje desde el componente Padre' 

recibirNotificacion(mensaje: string) {
this.mensaje = mensaje
}



}
