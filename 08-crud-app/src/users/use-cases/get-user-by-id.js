
// imports
import { localhostUserToModel } from '../mappers/localhost-user.mapper';


// getUserById
export const getUserById = async( id ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users/${ id }`;
    const res = await fetch( url );
    const data = await res.json();

    return localhostUserToModel( data );

};
