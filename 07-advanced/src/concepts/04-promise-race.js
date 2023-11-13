
// promiseRaceComponent
export const promiseRaceComponent = ( element ) => {

    element.innerHTML = 'Loading...';

    const renderValue = ( value ) => {
        element.innerHTML = value;
    };

    Promise.race([
        slowPromise(),
        mediumPromise(),
        fastPromise()
    ])
    .then( renderValue );

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
