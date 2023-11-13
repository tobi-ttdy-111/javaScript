
// imports
import { showModal } from '../render-modal/render-modal';
import './render-add-button.css';


// RenderAddButton
export const RenderAddButton = ( element, callback ) => {

    const fabButton = document.createElement( 'button' );
    fabButton.innerText = '+';
    fabButton.classList.add( 'fab-button' );

    element.append( fabButton );
    fabButton.addEventListener( 'click', () => {
        showModal();
    });

};
