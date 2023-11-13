
class Persona {

    static _conteo = 0;
    static get conteo() {
        console.log( `Instancias creadas ${ this._conteo }` );
    };
    static mensaje() {
        console.log( 'Hola wp' );
    };

    nombre = '';
    codigo = '';
    frase  = '';

    constructor( nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase' ) {
        Persona._conteo ++;
        if ( !nombre ) throw Error( 'El nombre no existe' );
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        this.comida = '';
    };

    set setComidaFavorita( comida ) {
        this.comida = comida.toUpperCase();
    };

    get getComidaFavorita() {
        return `La comida favorita de ${ this.nombre } es ${ this.comida }`;
    };

    quienSoy() {
        console.log( `Soy ${ this.codigo } y mi identidad es ${ this.nombre }` );
    };

    miFrase() {
        this.quienSoy();
        console.log( `${ this.codigo } dice ${ this.frase }` );
    };

};


class Heore extends Persona {

    clan = 'Sin clan';

    constructor( nombre, codigo, frase ) {
        super( nombre, codigo, frase ); // ! hace referencia al constructor de la clase padre
        this.clan = 'Avengers'; // ! uso del this es despues de el super
    };

    quienSoy() {
        console.log( `Soy ${ this.nombre }, del clan ${ this.clan }` );
        super.quienSoy(); // ! hacer referencia a los metodos de el elemento padre
    };

};

const spiderMan = new Heore( 'Peter Parker', 'Spider Man', 'Yo soy Spider Man' );
console.log( spiderMan );
spiderMan.quienSoy();