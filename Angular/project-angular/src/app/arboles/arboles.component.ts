import { Component } from '@angular/core';

@Component({
  selector: 'app-arboles',
  templateUrl: './arboles.component.html',
  styleUrls: ['./arboles.component.css']
})
export class ArbolesComponent {
  numero1= 0;
  numero2= 0;
  resultado = this.numero1 + this.numero2;
}
