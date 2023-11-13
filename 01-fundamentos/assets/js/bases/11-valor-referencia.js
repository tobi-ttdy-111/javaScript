
let a = 10;
let b = a;
a = 30;
console.log({ a, b }); // ! primitivos se pasan por valor


let juan = { nombre: 'Juan' };
let ana = { ...juan }; // ! romper la referencia ( spread )
ana.nombre = 'Ana';
console.log( juan, ana );


const cambiaNombre = ({ ...persona }) => {
    persona.nombre = 'Tony';
    return persona;
};
let peter = { nombre: 'Peter' };
let tony = cambiaNombre( peter );
console.log( peter, tony );


const frutas = [ 'Manzana', 'Pera', 'Piña' ];
// const otrasFrutas = [ ...frutas ];
const otrasFrutas = frutas.slice(); // ! otra forma de romper la referencia
otrasFrutas.push( 'Mango' );
console.table({ frutas, otrasFrutas });
