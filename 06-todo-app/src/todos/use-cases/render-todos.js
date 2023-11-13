
// imports
import { createTodoHTML } from './';


// element
let element;


// renderTodos
export const renderTodos = ( elementId, todos = [] ) => {

    if ( !element ) element = document.querySelector( elementId );
    if ( !element ) throw new Error( `Element ${ elementId } doesn't exist` );
    element.innerHTML = '';
    todos.forEach( todo => {
        element.append( createTodoHTML( todo ) );
    });

};