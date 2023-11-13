
// imports
import { heroes } from '../data/heroes';


// promiseComponent
export const promiseComponent = ( element ) => {

    const renderHero = ( hero ) => element.innerHTML = hero.name;
    const renderTwoHeroes = ( hero1, hero2 ) => element.innerHTML = `${ hero1.name } / ${ hero2.name }`;
    const renderError = ( error ) => element.innerHTML = error;

    const id1 = '5d86371fd55e2e2a30fe1ccb';
    const id2 = '5d86371fd55e2e2a30fe1cc3';

    // uso basico de una promesa
    // findHero( id1 )
    //     .then( renderHero ) // ! hero => renderHero( hero )
    //     .catch( renderError );

    // doble promesa ( forma 1 )
    Promise.all([
        findHero( id1 ),
        findHero( id2 )
    ])
    .then( ([ hero1, hero2 ]) => renderTwoHeroes( hero1, hero2 ) )
    .catch( renderError );

    // doble promesa ( forma 2 )
    // let hero1;
    // findHero( id1 )
    //     .then( hero => {
    //         hero1 = hero;
    //         return findHero( id2 );
    //     }).then( hero2 => {
    //         renderTwoHeroes( hero1, hero2 );
    //     })
    //     .catch( renderError );

    // doble promesa ( forma 3 )
    // findHero( id1 )
    //     .then( ( hero1 ) => {
    //         findHero( id2 )
    //             .then( hero2 => {
    //                 renderTwoHeroes( hero1, hero2 )
    //             })
    //             .catch( renderError );
    //     })
    //     .catch( renderError );

};


// findHero
const findHero = ( id ) => {

    return new Promise( ( resolve, reject ) => {
        const hero = heroes.find( hero => hero.id === id );
        if ( hero ) {
            resolve( hero );
            return;
        };
        reject( `Hero with id ${ id } not found` );
    });

};
