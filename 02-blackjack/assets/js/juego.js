
/*
C - Clubs
D - Diamonds
H - Hearts
S - Spades
*/


// main variables
let deck = [];
const tipos = [ 'C', 'D', 'H', 'S' ];
const especiales = [ 'A', 'J', 'Q', 'K' ];
let puntosJugador = 0;
let puntosComputadora  = 0;


// referencias html
const btnNuevo = document.querySelector( '#btnNuevo' );
const btnPedir = document.querySelector( '#btnPedir' );
const btnDetener = document.querySelector( '#btnDetener' );
const smalls = document.querySelectorAll( 'small' );
const jugadorCartas = document.querySelector( '#jugador-cartas' );
const computadoraCartas = document.querySelector( '#computadora-cartas' );


// crearDeck
const crearDeck = () => {

    deck = [];
    for ( let i = 2; i < 11; i++ ) {
        for (const tipo of tipos ) {
            deck.push( i + tipo )
        };
    };
    for ( const tipo of tipos ) {
        for (const especial of especiales ) {
            deck.push( especial + tipo );
        };
    };
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;

}; crearDeck();


// pedirCarta
const pedirCarta = () => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    };
    return deck.pop();

};


// valorCarta
const valorCarta = ( carta ) => {

    const valor = carta.substring( 0, carta.length - 1 ); // ! cortar un string
    return ( isNaN( valor ) ) ?
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;

};


// evento pedir carta
btnPedir.addEventListener( 'click', () => {

    const carta = pedirCarta();
    puntosJugador += valorCarta( carta );
    smalls[ 0 ].innerHTML = puntosJugador;

    const imgCarta = document.createElement( 'img' );
    imgCarta.src = `./assets/cartas/${ carta }.png`;
    imgCarta.classList.add( 'carta' );
    jugadorCartas.append( imgCarta );

    if ( puntosJugador > 21 ) {
        console.warn( 'Lo siento, perdiste' );
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador );
    } else if ( puntosJugador === 21 ) {
        console.warn( '21, genial!' );
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora( puntosJugador );
    };

});


// turnoComputadora
const turnoComputadora = ( puntosMinimos ) => {

    do {
        const carta = pedirCarta();
        puntosComputadora += valorCarta( carta );
        smalls[ 1 ].innerHTML = puntosComputadora;
        const imgCarta = document.createElement( 'img' );
        imgCarta.src = `./assets/cartas/${ carta }.png`;
        imgCarta.classList.add( 'carta' );
        computadoraCartas   .append( imgCarta );
        if ( puntosMinimos > 21 ) { break; };
    } while ( ( puntosComputadora < puntosMinimos ) && puntosMinimos <= 21 );

    setTimeout( () => {
        if ( puntosComputadora === puntosJugador ) {
            alert( 'Empate' );
        } else if ( puntosMinimos > 21 ) {
            alert( 'Perdiste' );
        } else if ( puntosComputadora > 21 ) {
            alert( 'Ganaste' );
        } else {
            alert( 'Perdiste' );
        };
    }, 100 );

};


// evento detener
btnDetener.addEventListener( 'click', () => {

    btnDetener.disabled = true;
    btnPedir.disabled = true;
    turnoComputadora( puntosJugador );

});


// evento nuevo juego
btnNuevo.addEventListener( 'click', () => {

    puntosComputadora = 0;
    puntosJugador = 0;
    smalls[ 0 ].innerHTML = 0;
    smalls[ 1 ].innerHTML = 0;
    jugadorCartas.innerHTML = '';
    computadoraCartas.innerHTML = '';
    deck = crearDeck();
    btnDetener.disabled = false;
    btnPedir.disabled = false;

});