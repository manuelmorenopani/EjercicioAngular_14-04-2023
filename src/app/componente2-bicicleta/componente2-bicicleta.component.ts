import { Component } from '@angular/core';
import { Bicicleta } from '../modulos/biciletas';

@Component({
  selector: 'app-componente2-bicicleta',
  templateUrl: './componente2-bicicleta.component.html',
  styleUrls: ['./componente2-bicicleta.component.css']
})
export class Componente2BicicletaComponent {
  color: string = "";
  marca: string = "";
  velocidad: number = 0;
  pinones: number = 0;
  platos: number = 0;
  electrica: boolean = false;
  velocidad2: number = 0;
  bicicleta: Bicicleta = new Bicicleta(this.color, this.marca, this.velocidad, this.pinones, this.platos, this.electrica);

  constructor() { }
  ngOnInit(): void {

  }

 
  modificarsubir(): void {
    this.bicicleta.acelerar(this.velocidad2)
    console.log(this.velocidad2)
    console.log(this.bicicleta.velocidad)

  }
  modificarbajar() {
    this.bicicleta.frenar(this.velocidad2)
  }



}
