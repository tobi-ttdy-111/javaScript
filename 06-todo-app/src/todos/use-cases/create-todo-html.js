
// createTodoHTML
export const createTodoHTML = ({ id, description, done = false, createdAt }) => {

    if ( !id || !description || !createdAt ) throw new Error( 'Todo is required' );
    const html = `
        <div class="view">
            <input class="toggle" type="checkbox" ${ done ? 'checked' : '' }>
            <label>${ description }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    `;

    const liElement = document.createElement( 'li' );
    liElement.setAttribute( 'data-id', id );
    if ( done ) liElement.classList.add( 'completed' );

    liElement.innerHTML = html;
    return liElement;

};
