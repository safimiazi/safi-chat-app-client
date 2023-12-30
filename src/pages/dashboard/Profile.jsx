import { Box, Stack, useTheme } from '@mui/material';
import { Theme } from 'emoji-picker-react';
import React from 'react';

const Profile = () => {
    const theme = useTheme()
    return (
        <>
            <Stack direction={"row"} sx={{width: "100%"}}>
<Box sx={{height: "100vh", backgroundColor: theme.palette.mode === "light"}}>

</Box>
            </Stack>
        </>
    );
};

export default Profile;