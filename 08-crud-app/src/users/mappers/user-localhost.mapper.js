
// imports
import { User } from '../models/user';


// userToLocalHost
export const userToLocalHost = ( user ) => {

    const {
        avatar,
        balance,
        firstName,
        gender,
        id,
        isActive,
        lastName
    } = user;

    return {
        id,
        isActive,
        balance,
        avatar,
        first_name: firstName,
        last_name: lastName,
        gender,
    };

};
