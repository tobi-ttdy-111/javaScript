
const heroes = [ 'Batman', 'Ironman', 'Superman', 'Mujer Maravilla', 'Aquaman' ];

console.warn( 'For' );
for ( let i = 0; i < heroes.length; i++ ) {
    console.log( heroes[ i ] );
};

console.warn( 'For in' );
for ( const i in heroes ) {
    console.log( heroes[ i ] );
};

console.warn( 'For of' );
for ( const heroe of heroes ) {
    console.log( heroe );
};
