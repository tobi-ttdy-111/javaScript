
// imports
import modalHtml from './render-modal.html?raw'
import './render-modal.css'
import { getUserById } from '../../use-cases/get-user-by-id';


// modal
let modal, form;
let loadedUser = {};


// showModal
export const showModal = async( id ) => {

    modal.classList.remove( 'hide-modal' );
    loadedUser = {};
    if ( !id ) return;
    loadedUser = await getUserById( id );
    setFormValues();

};


// hideModal
export const hideModal = () => {

    modal.classList.add( 'hide-modal' );
    form?.reset();

};


// setFormValues
const setFormValues = () => {

    form.querySelector( '[name="firstName"]' ).value = loadedUser.firstName;
    form.querySelector( '[name="lastName"]' ).value = loadedUser.lastName;
    form.querySelector( '[name="balance"]' ).value = loadedUser.balance;
    form.querySelector( '[name="isActive"]' ).checked = loadedUser.isActive;


};


// RenderModal
export const RenderModal = async( element, callback ) => {

    if ( modal ) return;

    modal = document.createElement( 'div' );
    modal.innerHTML = modalHtml;
    modal.className = 'modal-container hide-modal';

    form = modal.querySelector( 'form' );
    form.addEventListener( 'submit', async( e ) => {
        e.preventDefault();
        const formData = new FormData( form );
        const userLike = { ...loadedUser };
        for ( const [ key, value ] of formData ) {
            if ( key === 'balance' ) {
                userLike[ key ] = + value;
                continue;
            };
            if ( key === 'isActive' ) {
                userLike[ key ] = ( value === 'on' ) ? true : false;
                continue;
            };
            userLike[ key ] = value;
        };
        hideModal();
        await callback( userLike );
    });


    modal.addEventListener( 'click', ( e ) => {
        if ( e.target.className !== 'modal-container' ) return;
        hideModal();

    });

    element.append( modal );

};
