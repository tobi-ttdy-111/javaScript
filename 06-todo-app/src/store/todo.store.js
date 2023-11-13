
// imports
import { Todo } from '../todos/models/todo';


// Filters
export const Filters = {

    All: 'All',
    Completed: 'Completed',
    Pending: 'Pending'

};


// state
const state = {

    todos: [],
    filter: Filters.All

};


// initStore
const initStore = () => {

    loadStore();
    console.log( 'InitStore' );

};


// loadStore
const loadStore = () => {

    if ( !localStorage.getItem( 'state' ) ) return;
    const { todos = [], filter = Filters.All } = JSON.parse( localStorage.getItem( 'state' ) );
    state.todos = todos;
    state.filter = filter;

};


// saveStateLocalStorage
const saveStateLocalStorage = () => {

    localStorage.setItem( 'state', JSON.stringify( state ) ); // ! convertir objeto a string

};


// getTodos
const getTodos = ( filter = Filters.All ) => {

    switch ( filter ) {
        case Filters.All:
            return [ ...state.todos ]; // ! romper la referencia
        case Filters.Completed:
            return state.todos.filter( todo => todo.done );
        case Filters.Pending:
            return state.todos.filter( todo => !todo.done );
        default: throw new Error( `Option ${ filter } is not valid` );
    };

};


// addTodo
const addTodo = ( description ) => {

    if ( !description ) throw new Error( 'Description is required' );
    state.todos.push( new Todo( description ) );
    saveStateLocalStorage();

};


// toggleTodo
const toggleTodo = ( todoId ) => {

    state.todos = state.todos.map( todo => {
        if ( todo.id === todoId ) { todo.done = !todo.done };
        return todo;
    });
    saveStateLocalStorage();

};


// deleteTodo
const deleteTodo = ( todoId ) => {

    state.todos = state.todos.filter( todo => todo.id !== todoId );
    saveStateLocalStorage();

};


// deleteCompleted
const deleteCompleted = () => {

    state.todos = state.todos.filter( todo => !todo.done );
    saveStateLocalStorage();

};


// setFilter
const setFilter = ( newFilter = Filters.All ) => {

    if ( !newFilter ) throw new Error( 'newFilter is required' );
    if ( !Object.keys( Filters ).includes( newFilter ) ) throw new Error( `Filter ${ newFilter } is not valid` );
    state.filter = newFilter;
    saveStateLocalStorage();

};


// getCurrentFilter
const getCurrentFilter = () => {

    return state.filter;

};


// exports
export default {
    initStore,
    loadStore,
    saveStateLocalStorage,
    getTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter
};
