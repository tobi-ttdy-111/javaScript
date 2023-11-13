
let personaje = {

    nombre: 'Katarina',
    codeName: 'Pentarina',
    vivo: true,
    edad: 25,
    build: {
        item1: 'Hoja del rey',
        item2: 'Matakrakens'
    },
    skins: [ 'Reina guerrera', 'Academia de combate', 'Proyecto' ]

};

console.log( personaje );
console.log( 'nombre:', personaje.nombre );
console.log( 'nombre:', personaje[ 'nombre' ] );
console.log( 'numero skins: ', personaje.skins.length );

const x = 'vivo';
console.log( 'vivo:', personaje[ x ] );
