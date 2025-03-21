import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-en-linea',
  standalone: true,
  imports: [],
  template: `
    <p>
      {{tituloInLine}}
    </p>
  `,
  styles: ``
})
export class ComponenteEnLineaComponent {
tituloInLine = 'Titulo componente en Linea'
}
