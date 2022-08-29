import { Component } from "@angular/core";

@Component({
    selector:'app-heroe',
    templateUrl:'./heroe.component.html'
})

export class heroeComponent{
    nombre:string = "ironman";
    edad:number = 35;

    get nombreMayuscula(){
        return this.nombre.toUpperCase();
    }

    nombreCompleto():string{
       return this.nombre+'-'+this.edad
    }

    cambiarNombre(){
        this.nombre = "nicolas";
    }

    cambiarEdad(){
        this.edad = 17;
    }

}