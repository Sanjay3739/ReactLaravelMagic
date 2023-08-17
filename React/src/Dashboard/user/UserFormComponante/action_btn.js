import React from 'react';
import { FontAwesome ,DeleteIcon,PensileIcon ,EyeIcon} from '../../../component/icon';

const UserActionButtons = ({ userRole, loggedInUserPermissions, user, handleDelete, Edit, Show }) => {
    if (userRole === '1') {
        return (
            <>
                <a className='delete' onClick={() => handleDelete(user.id)}><FontAwesome icon={DeleteIcon} /></a>
                <a className='edit' onClick={() => Edit(user.id)}><FontAwesome icon={PensileIcon} /></a>
                <a className='show' onClick={() => Show(user.id)}><FontAwesome icon={EyeIcon} /></a>
            </>
        );
    } else {
        return (
            <>
                {loggedInUserPermissions.find((perm) => parseInt(perm.is_delete) === 1) ? (
                    <a className='delete' onClick={() => handleDelete(user.id)}><FontAwesome icon={DeleteIcon} /> </a>
                ) : null}
                {loggedInUserPermissions.find((perm) => parseInt(perm.is_edit) === 1) ? (
                    <a className='edit' onClick={() => Edit(user.id)}><FontAwesome icon={PensileIcon} /></a>
                ) : null}
                {loggedInUserPermissions.find((perm) => parseInt(perm.is_view) === 1) ? (
                    <a className='show' onClick={() => Show(user.id)}><FontAwesome icon={EyeIcon} /></a>
                ) : null}
                {loggedInUserPermissions.every((perm) => parseInt(perm.is_create) !== 1) &&
                    !loggedInUserPermissions.some((perm) => parseInt(perm.is_edit) === 1) &&
                    !loggedInUserPermissions.some((perm) => parseInt(perm.is_delete) === 1) &&
                    !loggedInUserPermissions.some((perm) => parseInt(perm.is_view) === 1) ? (
                    <span style={{ color: 'red' }}>No permission allow for all actions</span>
                ) : null}
            </>
        );
    }
};

export default UserActionButtons;
