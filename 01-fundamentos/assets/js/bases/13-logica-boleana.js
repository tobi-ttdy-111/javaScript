
const regresaTrue = () => true;
const regresaFalse = () => false;

console.log( !true ); // ! negacion
console.log( !regresaFalse() );

console.log( true && true ) // ! operador and
console.log( regresaFalse() && regresaFalse() );

console.log( false || true ); // ! operador or
console.log( regresaFalse() || regresaFalse() );

const soyUndefined = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = true && 'Hola mundo' && 150; // ! asignaciones ( toma el ultimo valor )
const a2 = 'Hola' && 'Mundo' && soyFalse;
const a3 = soyFalse || 'Ya no soy falso';
console.log({ a1, a2, a3 });


