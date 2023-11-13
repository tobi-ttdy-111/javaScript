
// Persona // ! use strict por defecto
class Persona {

    static _conteo = 0; // ! propiedad estatica
    static get conteo() {
        console.log( `Instancias creadas ${ this._conteo }` );
    };
    static mensaje() { // ! no se puede hacer llamado a las propiedades del objeto
        console.log( 'Hola wp' );
    };

    nombre = ''; // ! definicion de propiedades del objeto ( opcional )
    codigo = '';
    frase  = '';

    constructor( nombre = 'Sin nombre', codigo = 'Sin codigo', frase = 'Sin frase' ) { // ! no regresa undefined
        Persona._conteo ++;
        if ( !nombre ) throw Error( 'El nombre no existe' );
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        this.comida = '';
    };

    set setComidaFavorita( comida ) { // ! el set solo recibe un argumento ( opcional )
        this.comida = comida.toUpperCase();
    };

    get getComidaFavorita() { // ! get es para obtener una propiedad
        return `La comida favorita de ${ this.nombre } es ${ this.comida }`;
    };

    quienSoy() { // ! metodo
        console.log( `Soy ${ this.codigo } y mi identidad es ${ this.nombre }` );
    };

    miFrase() {
        this.quienSoy(); // ! llamar metodo dentro de otro metodo
        console.log( `${ this.codigo } dice ${ this.frase }` );
    };

};

const spiderMan = new Persona( 'Peter Parker', 'Spider Man', 'Yo soy Spider Man' );

spiderMan.quienSoy();
spiderMan.setComidaFavorita = 'El pie de cereza de la tía May';
console.log( spiderMan );

spiderMan.otraCosa = 'Otra cosa' // ! punto negativo de las clases
spiderMan.comida = 'Duende Verde'; // ! otro punto negativo
console.log( spiderMan.getComidaFavorita );
console.log( spiderMan );

Persona.conteo; // ! gets y sets no llevan parentesis
Persona.mensaje();

Persona.propiedadExterna = 'Hola mundo'; // ! se pueden crear propiedades estaticas fuera de la clase ( esto es negativo )
console.log( Persona.propiedadExterna );
