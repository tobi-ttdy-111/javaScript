
// imports
import usersStore from '../../store/users-store';
import { deleteUserById } from '../../use-cases/delete-user-by-id';
import { showModal } from '../render-modal/render-modal';
import './render-table.css';


// table
let table;


// createTable
const createTable = () => {

    const table = document.createElement( 'table' );
    const tableHeaders = document.createElement( 'thead' );
    tableHeaders.innerHTML = `
        <tr>
            <th>#ID</th>
            <th>Balance</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Active</th>
            <th>Actions</th>
        </tr>
    `;
    const tableBody = document.createElement( 'tbody' );
    table.append( tableHeaders, tableBody );
    return table;

};


// tableSelectListener
const tableSelectListener = ( event ) => {

    const element = event.target.closest( '.select-user' );
    if ( !element ) return;
    const id = element.getAttribute( 'data-id' );
    showModal( id );

};


// tableDeleteListener
const tableDeleteListener = async( event ) => {

    const element = event.target.closest( '.delete-user' );
    if ( !element ) return;
    const id = element.getAttribute( 'data-id' );
    try {
        await deleteUserById( id );
        console.log( 'hola' );
        await usersStore.reloadPage();
        document.querySelector( '#current-page' ).innerText = usersStore.getCurrentPage();
        RenderTable();
    } catch ( err ) {
        alert( 'No se pudo eliminar' );
    }

};


// RenderTable
export const RenderTable = ( element ) => {

    const users = usersStore.getUsers();
    if ( !table ) {
        table = createTable();
        element.append( table );
        table.addEventListener( 'click', tableSelectListener );
        table.addEventListener( 'click', tableDeleteListener )
    };

    let tableHTML = '';
    users.forEach( ({ id, balance, firstName, lastName, isActive })=> {
        tableHTML += `
            <tr>
                <td>${ id }</td>
                <td>${ balance }</td>
                <td>${ firstName }</td>
                <td>${ lastName }</td>
                <td>${ isActive }</td>
                <td>
                    <a href="#" class="select-user" data-id="${ id }">Select</a>
                    <a href="#" class="delete-user" data-id="${ id }">Delete</a>
                </td>
            </tr>
        `;
    });

    table.querySelector( 'tbody' ).innerHTML = tableHTML;

};
