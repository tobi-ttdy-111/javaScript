
// function crearPersona( nombre, apellido ) {
//     return {
//         nombre: nombre,
//         apellido: apellido
//     };
// };
const crearPersona = ( nombre, apellido ) => ({ nombre, apellido }); // ! retorno de objeto
const persona = crearPersona( 'Fernando', 'Herrera' );
console.log( persona );


// function imprimeArgumentos() {
//     console.log( arguments );
// };
const imprimeArgumentos = ( edad, ...arguments ) => { // ! operador rest
    console.log({ edad, })
    return arguments;
};
const [ vivo, dinero, casado, saludo ] = imprimeArgumentos( 10, true, 20, false, 'Hola mundo' ); // ! desestructuracion de argumentos
console.log({ vivo, dinero, casado, saludo });


const { apellido: nuevoApellido } = crearPersona( 'Tony', 'Stark' ); // ! cambiar nombre en la desestructuracion
console.log({ nuevoApellido });


const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: [ 'Mark I', 'Mark V', 'Hulkbuster' ]
};
const imrpimePropiedades = ({ nombre, codeName, vivo, edad, trajes }) => { // desestructuracion de objetos
    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });
};
imrpimePropiedades( tony );
