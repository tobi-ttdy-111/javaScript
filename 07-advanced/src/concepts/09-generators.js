
// generatorsComponent
export const generatorsComponent = ( element ) => {

    // const myGenerator = generatorFunction();
    // console.log( myGenerator.next() );
    // console.log( myGenerator.next() );
    // console.log( myGenerator.next() );
    // console.log( myGenerator.next() );
    // console.log( myGenerator.next() );
    // console.log( myGenerator.next() );
    // console.log( myGenerator.next() );
    // console.log( myGenerator.next() );

    const genId = idGenerator()
    const button = document.createElement( 'button' );
    button.innerText = 'Click me!';
    element.append( button );

    const renderValue = () => {
        const { value } = genId.next();
        button.innerText = `Click ${ value }`;
    };

    button.addEventListener( 'click', renderValue );


};


// idGenerator
function* idGenerator() {

    let currentId = 0;
    while( true ) {
        yield ++currentId;
    };

};


// generatorFunction
function* generatorFunction() {

    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
    yield 'Valor 4';
    yield 'Valor 5';
    yield 'Valor 5';
    return 'Ya we'

};