
function saludar1( nombre ) { // ! funcion normal
    console.log( arguments )
    console.log( 'Hola', nombre );
    return 1;
};

const saludar2 = function( nombre ) { // ! funcion anonima
    console.log( arguments )
    console.log( 'Hola', nombre );
    return 1 + 15;
};


const saludar3 = ( nombre ) => { // ! funcion flecha
    console.log( 'Hola', nombre );
    return [ 1, 2, 3 ];
};

const retornoSaludar1 = saludar1( 'Fernando Herrera', 10, 20, true, 'aqua' );
const retornoSaludar2 = saludar2( 'Fernando Herrera', 'aqua', true, 20, 10 );
const retornoSaludar3 = saludar3( 'Fernando Herrera' );

console.log({ retornoSaludar1 });
console.log({ retornoSaludar2 });
console.log({ retornoSaludar3 });

const sumar = ( a, b ) => a + b
console.log( 'suma:', sumar( 1, 3 ) );

const aleatorio = () => Math.random();
console.log( 'aleatorio:', aleatorio() );
