
/*
semana 11
fines  9
*/

const dia = 0;
const horaActual = 9;

let horaApertura;
let mensaje;

// if ( dia === 0 || dia == 6 ) {
// if ( [ 0, 6 ].includes( dia ) ) { // ! preguntar si el arreglo incluye un valor
//     console.log( 'Fin de semana' );
//     horaApertura = 9;
// } else {
//     console.log( 'Día de semana' );
//     horaApertura = 11;
// };
horaApertura = ( [ 0, 6 ].includes( dia ) ) ? 9 : 11;

// if ( horaActual >= horaApertura ) {
//     mensaje = 'Está abierto';
// } else {
//     mensaje = `Está cerrado, hoy abrimos a las ${ horaApertura }`;
// };
mensaje = ( horaActual >= horaApertura ) ? 'Está abierto' : `Está cerrado, hoy abrimos a las ${ horaApertura }`;

console.log({ horaApertura, mensaje });
