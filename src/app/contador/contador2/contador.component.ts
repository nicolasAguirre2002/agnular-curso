import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html'
    })

export class contadorComponent {
  titulo = 'contador app';

  base:number = 5;

  numero:number = 0;

  acumulador (valor:number){
    this.numero += valor;
  }
}