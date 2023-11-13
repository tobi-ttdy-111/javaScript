
// imports
import html from './app.html?raw'; // ! importar html
import todoStore from '../store/todo.store';
import { renderPendingTodos, renderTodos } from './use-cases';


// ElementIDs
const ElementIDs = {

    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    ClearCompleted: '.clear-completed',
    TodoFilters: '.filtro',
    PendingCount: '#pending-count'

};


// App
export const App = ( elementId ) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos( ElementIDs.TodoList , todos );
        displayPendingsCount();
    };

    const displayPendingsCount = () => {
        renderPendingTodos( ElementIDs.PendingCount );
    };

    ( () => {
        const app = document.createElement( 'div' );
        app.innerHTML = html;
        document.querySelector( elementId ).append( app );
        displayTodos();
    } )();

    // addTodo
    const newTodoInput = document.querySelector( ElementIDs.NewTodoInput );
    newTodoInput.addEventListener( 'keyup', ( e ) => {
        if ( e.keyCode !== 13 ) return;
        if ( e.target.value.trim().length === 0 ) return;
        todoStore.addTodo( e.target.value );
        e.target.value = '';
        displayTodos();
    });

    // deleteTodo & toggleTodo
    const todoList = document.querySelector( ElementIDs.TodoList );
    todoList.addEventListener( 'click', ( e ) => {
        if ( e.target.className == '' ) return;
        if ( e.target.className == 'destroy' ) todoStore.deleteTodo( e.target.closest( '[data-id]' ).getAttribute( 'data-id' ) );
        if ( e.target.className == 'toggle' ) todoStore.toggleTodo( e.target.closest( '[data-id]' ).getAttribute( 'data-id' ) );
        displayTodos();
    });

    // deleteCompleted
    const clearCompleted = document.querySelector( ElementIDs.ClearCompleted );
    clearCompleted.addEventListener( 'click', () => {
        todoStore.deleteCompleted();
        displayTodos();
    });

    // todoFilters
    const todoFilters = document.querySelectorAll( ElementIDs.TodoFilters )
    todoFilters.forEach( element => {
        element.addEventListener( 'click', ( e ) => {
            todoFilters.forEach( li => li.classList.remove( 'selected' ) ); // ! remover clases
            e.target.classList.add( 'selected' ); // ! añadir clases
            todoStore.setFilter( e.target.text );
            displayTodos();
        });
    });


};