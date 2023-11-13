
// imports
import { heroes } from '../data/heroes';


// forAwaitComponent
export const forAwaitComponent = async( element ) => {

    const id1 = '5d86371fd55e2e2a30fe1ccb1';
    const heroIds = heroes.map( hero => hero.id );

    // if ( await getHeroAsync( id1 ) ) { // ! if await
    //     element.innerHTML = 'Si existe essese héroe';
    //     return;
    // };
    // element.innerHTML = 'No existe ese hérore';

    const heroPromises = getHeroesAsync( heroIds );
    for await( const hero of heroPromises ) { // ! for await
        element.innerHTML += `${ hero.name }<br>`;
    };

};


// getHeroesAsync
const getHeroesAsync = ( heroIds ) => {

    const heroPromises = [];
    heroIds.forEach( id => {
        heroPromises.push( getHeroAsync( id )  );
    });
    return heroPromises;

};


// getHeroAsync
const getHeroAsync = async( id ) => {

    await new Promise( ( resolve ) => {
        setTimeout( () => resolve(), 1000 );
    });
    return heroes.find( hero => hero.id === id );

};
