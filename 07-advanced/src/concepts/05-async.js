import { heroes } from "../data/heroes";

// asyncCoponent
export const asyncCoponent = ( element ) => {

    const id1 = '5d86371fd55e2e2a30fe1cc3';
    const id2 = '5d86371fd55e2e2a30fe1ccb1';
    console.log( 'Inicio del componente' );

    findHero( id1 )
        .then( name => element.innerHTML = name )
        .catch( ( error ) => element.innerHTML = error );

    console.log( 'Fin del componente' );

};


// findHero
const findHero = async( id ) => {

    const hero = heroes.find( hero => hero.id === id );
    if ( !hero ) throw `Hero with id ${ id } not found`;
    return hero.name;
};
