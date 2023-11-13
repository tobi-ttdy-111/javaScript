
// imports
import { loadUsersByPage } from '../use-cases/load-users-by-page';


// state
const state = {

    users: [],
    currentPage: 0

};


// loadNextPage
const loadNextPage = async() => {

    const users = await loadUsersByPage( state.currentPage + 1 );
    if ( users.length === 0 ) return;
    state.currentPage += 1;
    state.users = users;

};


// loadPreviousPage
const loadPreviousPage = async() => {

    if ( state.currentPage === 1 ) return;
    const users = await loadUsersByPage( state.currentPage - 1 );
    state.currentPage -= 1;
    state.users = users;

};


// onUserChange
const onUserChange = ( updatedUser ) => {

    let wasFond = false;

    state.users = state.users.map( user => {
        if ( user.id === updatedUser.id ) {
            wasFond = true;
            return updatedUser;
        };
        return user;
    });

    if ( state.users.length < 10 && wasFond === false ) {
        state.users.push( updatedUser );
    };

};


// reloadPage
const reloadPage = async() => {


    const users = await loadUsersByPage( state.currentPage );
    if ( users.length === 0 ) {
        await loadPreviousPage();
        return;
    };
    state.users = users;

};


// exports
export default {
    loadNextPage,
    loadPreviousPage,
    onUserChange,
    reloadPage,
    getUsers: () => [ ...state.users ],
    getCurrentPage: () => state.currentPage
};
