
// imports
import { heroes } from '../data/heroes';


// asyncAwaitComponent
export const asyncAwaitComponent = async( element ) => {

    const id1 = '5d86371fd55e2e2a30fe1ccb2';
    const id2 = '5d86371fd55e2e2a30fe1cc4';

    try {
        const hero1 = await findHero( id1 );
        const hero2 = await findHero( id2 );
        element.innerHTML = `${ hero1.name } / ${ hero2.name }`;
    } catch ( err ) {
        element.innerHTML = err;
    }

};


// findHero
const findHero = async( id ) => {

    const hero = heroes.find( hero => hero.id === id );
    if ( !hero ) throw 'Hero not found';
    return hero;

};
