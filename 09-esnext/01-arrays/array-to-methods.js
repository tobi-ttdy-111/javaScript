
const heroes = [ 'Batman', 'Superman', 'Flash', 'Aquaman' ];

const sortedHeroes = heroes.toSorted();
const reversedHeroes = heroes.toReversed();
const splicedHeroes = heroes.toSpliced( 0, 2, 'Green lantern' );

console.table( heroes );
console.table( sortedHeroes );
console.table( reversedHeroes );
console.table( splicedHeroes );
