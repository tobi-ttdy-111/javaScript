

const miModulo = ( () => {

    'use strict' // ! habilitar modo estricto


    // main variables
    let deck = [],
        puntosJugadores = [];
    const tipos = [ 'C', 'D', 'H', 'S' ],
          especiales = [ 'A', 'J', 'Q', 'K' ];


    // referencias html
    const btnNuevo = document.querySelector( '#btnNuevo' ),
          btnPedir = document.querySelector( '#btnPedir' ),
          btnDetener = document.querySelector( '#btnDetener' ),
          smalls = document.querySelectorAll( 'small' ),
          divCartasJugadores = document.querySelectorAll( '.divCartas' );


    // inicializarJuego
    const inicializarJuego = ( numJugadores = 2 ) => {

        deck = crearDeck();
        puntosJugadores = [];
        for ( let i = 0; i < numJugadores; i++ ) {
            puntosJugadores.push( 0 );
        };
        smalls.forEach( elemento => elemento.innerText = 0 );
        divCartasJugadores.forEach( div => div.innerHTML = '' );
        btnDetener.disabled = false;
        btnPedir.disabled = false;

    };


    // crearDeck
    const crearDeck = () => {

        deck = [];
        for ( let i = 2; i < 11; i++ ) {
            for ( const tipo of tipos ) {
                deck.push( i + tipo )
            };
        };
        for ( const tipo of tipos ) {
            for ( const especial of especiales ) {
                deck.push( especial + tipo );
            };
        };
        return _.shuffle( deck );

    };


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
        const puntosJugador = acumularPuntos( 0, carta );
        crearCarta( 0, carta );

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


    // acumularPuntos
    const acumularPuntos = ( turno, carta ) => {

        puntosJugadores[ turno ] += valorCarta( carta );
        smalls[ turno ].innerHTML = puntosJugadores[ turno ];
        return puntosJugadores[ turno ];

    };


    // crearCarta
    const crearCarta = ( turno, carta ) => {

        const imgCarta = document.createElement( 'img' );
        imgCarta.src = `./assets/cartas/${ carta }.png`;
        imgCarta.classList.add( 'carta' );
        divCartasJugadores[ turno ].append( imgCarta );

    };


    // determinarGanador
    const determinarGanador = () => {

        const [ puntosMinimos, puntosComputadora ] = puntosJugadores;
        setTimeout( () => {
            if ( puntosJugadores[ puntosJugadores.length - 1 ] === puntosJugadores[ 0 ] ) {
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


    // turnoComputadora
    const turnoComputadora = ( puntosMinimos ) => {

        let puntosComputadora = 0;
        do {
            const carta = pedirCarta();
            puntosComputadora = acumularPuntos( puntosJugadores.length - 1, carta );
            crearCarta( puntosJugadores.length - 1, carta );
            if ( puntosMinimos > 21 ) { break; };
        } while ( ( puntosComputadora < puntosMinimos ) && puntosMinimos <= 21 );
        determinarGanador();

    };


    // evento detener
    btnDetener.addEventListener( 'click', () => {

        btnDetener.disabled = true;
        btnPedir.disabled = true;
        turnoComputadora( puntosJugadores[ 0 ] );

    });


    // evento nuevo juego
    btnNuevo.addEventListener( 'click', () => {

        inicializarJuego();

    });

    return {
        nuevoJuego: inicializarJuego // ! hacer publica alguna funcion
    };

} )();
