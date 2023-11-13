
let videoJuegos = [ 'League of Legends', 'Pokemon', 'Fortnite', 'Valorant' ];

console.log( 'Largo:', videoJuegos.length ); // ! tamaño
console.log( 'Ultimo:', videoJuegos.length - 1 ); // ! ultimo elemento

videoJuegos.forEach( ( elemento, indice, arr ) => { // ! recorrer cada elemento
    console.log({ elemento, indice, arr });
});

let nuevoLargo = videoJuegos.push( 'Clash Royale' ); // ! añadir al final
console.log({ nuevoLargo, videoJuegos });

nuevoLargo = videoJuegos.unshift( 'Clash of Clans' ); // ! añadir al inicio
console.log({ nuevoLargo, videoJuegos });

let ultimoElemento = videoJuegos.pop(); // ! borrar ultimo
console.log({ ultimoElemento, videoJuegos });

let elementosBorrados = videoJuegos.splice( 0, 2 ); // ! borrar x elementos
console.log({ elementosBorrados, videoJuegos });

let posFortnite = videoJuegos.indexOf( 'Fortnite' ); // ! buscar posicion
console.log({ posFortnite, videoJuegos });