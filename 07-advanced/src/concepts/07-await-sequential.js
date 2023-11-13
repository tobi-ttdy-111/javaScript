
// imports
import { heroes } from '../data/heroes';


// awaitSequentialComponent
export const awaitSequentialComponent = async( element ) => {

    const [ value1, value2, value3 ] = await Promise.all([
        slowPromise(),
        mediumPromise(),
        fastPromise()
    ]);

    element.innerHTML = `
        value1: ${ value1 }<br>
        value2: ${ value2 }<br>
        value3: ${ value3 }<br>
    `;

};


// slowPromise
const slowPromise = () => new Promise( resolve => {
    setTimeout( () => { resolve( 'Slow promise' ); }, 2000 );
});


// mediumPromise
const mediumPromise = () => new Promise( resolve => {
    setTimeout( () => { resolve( 'Medium promise' ); }, 1500 );
});


// fastPromise
const fastPromise = () => new Promise( resolve => {
    setTimeout( () => { resolve( 'Fast promise' ); }, 1000 );
});
