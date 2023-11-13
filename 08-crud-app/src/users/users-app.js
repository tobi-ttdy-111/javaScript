
// imports
import { RenderAddButton } from './presentation/render-add-button/render-add-button';
import { RenderButtons } from './presentation/render-buttons/render-buttons';
import { RenderModal } from './presentation/render-modal/render-modal';
import { RenderTable } from './presentation/render-table/render-table';
import usersStore from './store/users-store';
import { saveUser } from './use-cases/save-user';


// UsersApp
export const UsersApp = async( element ) => {

    await usersStore.loadNextPage();

    RenderTable( element );
    RenderButtons( element )
    RenderAddButton( element );
    RenderModal( element, async( userLike ) => {
        const user = await saveUser( userLike );
        usersStore.onUserChange( user );
        RenderTable();
    });

};