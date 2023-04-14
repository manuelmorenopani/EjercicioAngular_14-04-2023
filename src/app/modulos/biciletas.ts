export class Bicicleta {
    // Properties
    private _marca: string;
    private _color: string;
    private _velocidad: number=0;
    private _pinones: number=0;
    private _platos: number=0;
    private _electrica: boolean=false;

    // Constructor
    constructor(marca: string, color: string, velocidad: number, pinones: number, platos : number, electrica : boolean) {
        this._marca = marca;
        this._color = color;
        this._velocidad = velocidad;
        this._pinones = pinones;
        this._platos = platos;
        this._electrica = electrica;

    }
    //Acessors
    get marca() {
        return this._marca;
    }
    set marca(marca) {
        this._marca = marca;
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color;
    }
    get velocidad() {
        return this._velocidad;
    }
    set velocidad(velocidad) {
        this._velocidad = velocidad;
    }
    get pinones() {
        return this._pinones;
    }
    set pinones(pinones) {
        this._pinones = pinones;
    }
    get platos() {
        return this._platos;
    }
    set platos(platos) {
        this._platos = platos;
    }
    get electrica() {
        return this._electrica;
    }
    set electrica(electrica) {
        this._electrica = electrica;
    }
    //metodos
    acelerar(speed: number): number  {
        return this.velocidad = this.velocidad + speed;
    }
    frenar(speed: number): number {
        return this.velocidad = this.velocidad - speed;
   
    }

}