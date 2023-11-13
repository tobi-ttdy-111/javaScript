
class Singleton {

    static instancia; // ! almacena undefined por defecto
    nombre = '';

    constructor( nombre = '' ) {

        if ( !!Singleton.instancia ) {
            return Singleton.instancia;
        };
        Singleton.instancia = this;
        this.nombre = nombre;
        return this; // ! por defecto el constructor retorna un this

    };

};

const instancia1 = new Singleton( 'Katarina' );
const instancia2 = new Singleton( 'Spider' );
console.log( `Nombre en la instancia1: ${ instancia1.nombre }` );
console.log( `Nombre en la instancia2: ${ instancia2.nombre }` );

const a = undefined; // ! Nota sobre la doble negacion
console.log( a ); // undefined
console.log( !a ); // true
console.log( !!a ); // false