
// superHeores
const superHeores = [

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


let superHeoresCopy = [ ...superHeores ]; // ! copia de el arreglo ( no funciona para las propiedades internas )
superHeoresCopy[ 0 ].name = 'Green lantern';
console.table( superHeores );
console.table( superHeoresCopy );

superHeoresCopy = JSON.parse( JSON.stringify( superHeores ) ); // ! copia
superHeoresCopy = structuredClone( superHeores ); // ! copia ( recomendada )

