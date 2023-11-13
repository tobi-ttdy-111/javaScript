
const numMayor = ( a, b ) => ( a > b ) ? a : b; // ! ternario en funciones
const tieneMembresia = ( miembro ) => ( miembro ) ? '2 dolares' : '10 dolares';

console.log( numMayor( 20, 15 ) );
console.log( tieneMembresia( false ) );

const amigo = true;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    ( () => 'Nick Fury' )() // ! funcion anonima autoinvocada
];
console.log({ amigosArr });

const nota = 70;
const grado = ( nota >= 95 ) ? 'A+' : // ! ternario anidado
              ( nota >= 90 ) ? 'A'  :
              ( nota >= 85 ) ? 'A'  :
              ( nota >= 80 ) ? 'B+' :
              ( nota >= 75 ) ? 'B'  :
              ( nota >= 70 ) ? 'C'  :
              ( nota >= 65 ) ? 'D'  :
              ( nota >= 60 ) ? 'E'  : 'F';
console.log({ nota, grado });
