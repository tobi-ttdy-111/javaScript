
// imports
import { heroes } from '../data/heroes';


// generatorsAsync
export const generatorsAsync = async( element ) => {

    const heroGenerator = getHeroGenerator();
    let isFinished = false;
    do {
        const { value, done } = await heroGenerator.next();
        isFinished = done;
        if ( isFinished ) break;
        element.innerText = value;
    } while ( !isFinished );

};


// getHeroGenerator
async function* getHeroGenerator() {

    for ( const hero of heroes ) {
        await sleep();
        yield hero.name;
    };

};


// sleep
const sleep = () => {

    return new Promise( resolve => {
        setTimeout( () => {
            resolve();
        }, 1000 );
    });

};