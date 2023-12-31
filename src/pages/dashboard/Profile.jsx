import { Box, IconButton, Stack, Typography, useTheme } from '@mui/material';
import { CaretLeft } from 'phosphor-react';
import React from 'react';
import ProfileForm from '../../Sections/Settings/ProfileForm';

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
                                <CaretLeft />
                            </IconButton>
                            <Typography variant='h4'>Profile</Typography>
                        </Stack>

                        {/* profile form */}
                        <ProfileForm/>
                    </Stack>
                </Box>
            </Stack>
        </>
    );
};

export default Profile;