
let a = 10;
if ( a >= 10 ) { // ! undefined null y asignacion ( exepciones )
    console.log( 'a es mayor o igual a 10' );
} else {
    console.log( 'a es menor a 10' );
};


const hoy = new Date();
let dia = hoy.getDay();
console.log({ dia });
if ( dia == 0 ) {
    console.log( 'Es domingo' );
} else if ( dia == 1 ) {
    console.log( 'Es lunes' );
} else {
    console.log( 'No es domingo ni lunes ');
};


const dias = {
    0: () => 'Domingo - 0',
    1: () => 'Lunes - 1',
    2: () => 'Martes - 2',
    3: () => 'Miercoles - 3',
    4: () => 'Jueves - 4',
    5: () => 'Viernes - 5',
    6: () => 'Sabado - 6'
};
console.log( 'Hoy es', dias[ dia ]() || 'Día no definido' );
