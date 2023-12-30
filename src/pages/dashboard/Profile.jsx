import { Box, IconButton, Stack, useTheme } from '@mui/material';
import React from 'react';

const Profile = () => {
    const theme = useTheme()
    return (
        <>
            <Stack direction={"row"} sx={{ width: "100%" }}>
                <Box sx={{ height: "100vh", backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background, width: 320, boxShadow: "0px 0px 2px rgba(0,0,0, 0.25)", }}>
                    <Stack p={4} spacing={5}>
                        {/* Header */}
<Stack direction={"row"} alignItems={"center"} spacing={3}>
<IconButton>
    
</IconButton>
</Stack>
                    </Stack>
                </Box>
            </Stack>
        </>
    );
};

export default Profile;