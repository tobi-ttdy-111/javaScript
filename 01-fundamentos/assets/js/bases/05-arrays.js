
let arr = new Array( 10 ); // ! poco comun
console.log( arr );


let videoJuegos = [ 'League of Legends', 'Pokemon', 'Fortnite' ];
console.log({ videoJuegos });
console.log( videoJuegos[ 0 ] ); // ! acceder al primer elemento


let arregloCosas = [
    true,
    123,
    'Fernando',
    1 + 2,
    function(){},
    () => {},
    { a: 1 },
    [ 'Katarina', 'Irelia', 'Akali' ]
];
console.log({ arregloCosas });
console.log( arregloCosas[ 7 ][ 2 ] );
