
const carros = [ 'Ford', 'Mazda', 'Honda', 'Toyota' ];

console.warn( 'while' );
let i = 0;
while ( carros[ i ] ) { // ! undefined, null, false
    console.log( carros[ i ] );
    i ++;
};

console.warn( 'do-while' );
let j = 0;
do {
    console.log( carros[ j ] );
    j ++;
} while ( carros[ j ] );
