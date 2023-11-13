
let nombre = 'Peter Parker';
console.log( nombre );
nombre = 'Peni Parker';
console.log( nombre );
nombre = "Tía May";
nombre = `Tía May`;
console.log( typeof( nombre ) ); // ! saber el tipo de una variable

let soyString = 'Hola mundo';
let soyNumber = 3.1416;
let soyBoolean = true;
let soyUndefined;
let soyNull = null;
let soySymbol = Symbol( 1 );

console.log( { soyString }, typeof( soyString ) );
console.log( { soyNumber }, typeof( soyNumber ) );
console.log( { soyBoolean }, typeof( soyBoolean ) );
console.log( { soyUndefined }, typeof( soyUndefined ) );
console.log( { soyNull }, typeof( soyNull ) );
console.log( { soySymbol }, typeof( soySymbol ) );
