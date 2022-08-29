import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
  
})
export class ListadoComponent {
  heroes: string[] = ["irnomam","Thor","Spiderman"]
  borrado: string = "";
  
  contado: number = 0;
  borrar(){
     this.borrado = this.heroes.shift() || "";

     if(this.borrado != ""){
        this.contado++;
     }
  }
}
