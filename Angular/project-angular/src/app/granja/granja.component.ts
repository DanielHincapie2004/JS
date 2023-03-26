import { Component } from "@angular/core";
import { ArbolesComponent } from "../arboles/arboles.component";

@Component({
    selector: 'app-farm',
    templateUrl: './granja.component.html',
    styleUrls: ['./granja.component.css']
  })
export class GranjaComponent {
  datos: ArbolesComponent = new ArbolesComponent();

  sumar(): void {
    const resultado = this.datos.numero1 + this.datos.numero2;
    this.datos.resultado = resultado
  }
  resta(): void {
    const resultado = this.datos.numero1 - this.datos.numero2;
    this.datos.resultado = resultado
  }
}