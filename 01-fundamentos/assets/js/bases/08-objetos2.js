
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

delete personaje.edad; // ! eliminar propiedad
console.log( personaje );

personaje.main = true; // ! añadir una propiedad
console.log( personaje );

const entriesPares = Object.entries( personaje ); // ! trabajar por pares de valores ( array )
console.log({ entriesPares });

Object.freeze( personaje ); // ! congelar propiedades principales
personaje.oro = 10000;
personaje.main = false;
personaje.build.item1 = 'Diente de Nashor';
console.log( personaje );

const propiedades = Object.getOwnPropertyNames( personaje ); // ! arreglo con todas las propiedades
const valores = Object.values( personaje ); // ! arreglo con todos los valores
console.log({ propiedades, valores });
