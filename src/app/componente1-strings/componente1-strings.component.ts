import { Component } from '@angular/core';

@Component({
  selector: 'app-componente1-strings',
  templateUrl: './componente1-strings.component.html',
  styleUrls: ['./componente1-strings.component.css']
})
export class Componente1StringsComponent {

//commillas dobles
str1 : string = "Hola mundo "
//commillas simples
str2 : string ='Hola Mundo'
//$[expresion]
nombre: string = 'Manuel';
edad: number = 26;
mensaje: string = '${str1} mi nombre es ${nombre} y tengo ${edad}'

}
