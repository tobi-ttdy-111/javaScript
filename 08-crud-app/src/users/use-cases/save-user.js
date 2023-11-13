
// imports
import { localhostUserToModel } from "../mappers/localhost-user.mapper";
import { userToLocalHost } from "../mappers/user-localhost.mapper";
import { User } from "../models/user";


// saveUser
export const saveUser = async( userLike ) => {

    const user = new User( userLike );
    if ( !user.firstName || !user.lastName || !user.balance ) {
        throw new Error( 'Incompleted data' );
    };

    const userToSave = userToLocalHost( user );
    let userUpdated

    if ( user.id ) {
        userUpdated =  await updateUser( userToSave );
    } else {
        userUpdated =  await createUser( userToSave );
    }
    return localhostUserToModel( userUpdated );

};


// createUser
const createUser = async( user ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users`;
    const res = await fetch( url, {
        method: 'POST',
        body: JSON.stringify( user ),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await res.json();
    return data;

};


// updateUser
const updateUser = async( user ) => {

    const url = `${ import.meta.env.VITE_BASE_URL }/users/${ user.id }`;
    const res = await fetch( url, {
        method: 'PATCH',
        body: JSON.stringify( user ),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const updatedUser = await res.json();
    return updatedUser;

};