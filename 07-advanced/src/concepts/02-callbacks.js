
// imports
import { heroes } from '../data/heroes';


// callbacksComponent
export const callbacksComponent = ( element ) => {

    const id = '5d86371fd55e2e2a30fe1cc4';
    findHero( id, ( error, hero ) => { // ! callback( error, result )
        if ( error ) {
            element.innerHTML = error;
            return;
        };
        element.innerHTML = hero.name;
    });

};


// findHero
const findHero = ( id, callback ) => {

    const hero = heroes.find( hero => hero.id === id );
    if ( !hero ) {
        callback( `Hero with id: ${ id } is not found` );
        return;
    };
    callback( null, hero );

};