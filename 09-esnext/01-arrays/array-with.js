
// state
const state = [

    {
        id: 1,
        name: 'Batman'
    },
    {
        id: 2,
        name: 'Super man'
    },
    {
        id: 3,
        name: 'Flash'
    },
    {
        id: 4,
        name: 'Aquaman'
    }

];


const index = 1;
const newName = 'Green Lantern';

// const newState = state.map( ( hero, id ) => {
//     if ( id === index ) {
//         hero.name = newName;
//     };
//     return { ...hero }; // ! romper referencia
// });
// state[ 0 ].name = 'Volcan negro';
// console.table( newState );


const newState = state.with( index, {
    ...state.at( index ),
    name: newName
}); // ! reemplazar informacion ( no rompe la referencia )
state[ 0 ].name = 'Volcan negro';
console.table( newState );

console.log( 'Ultimo: ', state.at( -1 ) ); // ! obtener posicion de un arreglo
