
class Rectangulo {

    #area = 0; // ! propiedades privados

    constructor( base = 0, altura = 0 ) {
        this.base = base;
        this.altura = altura;
        this.#area = base * altura;
    };

    calcularArea() { // ! aun no existen metodos privados
        console.log( this.#area * 2 );
    };

};

const rectangulo = new Rectangulo( 10, 15 );
console.log( rectangulo );
