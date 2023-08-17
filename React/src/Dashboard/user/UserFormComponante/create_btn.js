import React from 'react';
import { Button, Stack } from '@mui/material'; 
import { PersonAddAltTwoToneIcon } from '../../../component/icon';

const CreateButton = ({ userRole, loggedInUserPermissions, onClick }) => {
  if (userRole === '1' || loggedInUserPermissions.some(perm => parseInt(perm.is_create) === 1)) {
    return (
      <Stack spacing={2} direction='row' className='m-3'> {/* Use Stack instead of Stacks */}
        <Button variant='contained' onClick={onClick}>
          Create <PersonAddAltTwoToneIcon className='ps-2' />
        </Button>
      </Stack>
    );
  } else {
    return <div className='no-permission-message'></div>;
  }
};

export default CreateButton;
