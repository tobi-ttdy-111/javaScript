
// imports
import todoStore, { Filters } from '../../store/todo.store';


// element
let element;


// renderPendingTodos
export const renderPendingTodos = ( elementId ) => {

    if ( !element ) element = document.querySelector( elementId );
    if ( !element ) throw new Error( `Element ${ elementId } not found` );

    element.innerHTML = todoStore.getTodos( Filters.Pending ).length;

};
