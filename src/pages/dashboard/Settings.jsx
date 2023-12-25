import { faker } from '@faker-js/faker';
import { Avatar, Box, IconButton, Stack, Typography, useTheme } from '@mui/material';
import { CaretLeft } from 'phosphor-react';
import React from 'react';

const Settings = () => {
    const theme = useTheme()
    return (
        <>
            <Stack direction={"row"} sx={{ width: "100%" }}>
                {/* left pannel */}
                <Box sx={{ overflowY: "auto", height: "100vh", width: 320, backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background, boxShadow: "0px 0px 2px rgba(0,0,0, 0.25)" }}>
                    <Stack p={4} spacing={5}>
                        {/* header */}
                        <Stack direction={"row"} alignItems={"center"} spacing={3}>
                            <IconButton>
                                <CaretLeft size={24} color={"#4B4B4B"} />
                            </IconButton>
                            <Typography variant='h6'>
                                Settings
                            </Typography>
                        </Stack>
                        {/* profile */}
                        <Stack direction={"row"} spacing={3}>
                            <Avatar sx={{ width: 56, height: 56 }} src={faker.image.avatar()} alt={faker.name.fullName()} />
                            <Stack spacing={0.5}>
                                <Typography variant='body2'>
                                    {faker.random.words()}
                                </Typography>
                                <Typography variant='article'>
                                    {faker.name.fullName()}
                                </Typography>
                            </Stack>
                        </Stack>
                        {/* list of option */}
                    </Stack>
                </Box>
                {/* right pannel */}
                <Box>

                </Box>
            </Stack>
        </>
    );
};

export default Settings;