
const fer = {
    nombre: 'Fernando',
    edad: 12,
    imprimir() {
        console.log( this.nombre, this.edad );
    }
};
const pedro = {
    nombre: 'Pedro',
    edad: 21,
    imprimir() {
        console.log( this.nombre, this.edad );
    }
};
fer.imprimir();
pedro.imprimir();


function Persona( nombre, edad ) { // ! funcion para crear instancias

    console.log( 'Se ejecutó esta línea' );
    this.nombre = nombre; // ! hacer referencia a las propiedades del objeto
    this.edad = edad;

    this.imprimir = function() {
        console.log( this.nombre, this.edad );
    }

};

const maria = new Persona( 'María', 18 ) // ! crear instancia
maria.imprimir();