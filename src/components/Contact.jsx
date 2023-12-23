import { Avatar, Box, IconButton, Stack, Typography, useTheme } from '@mui/material';
import { X } from 'phosphor-react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { ToggleSidebar } from '../redux/slices/Apps';
import { faker } from '@faker-js/faker';

const Contact = () => {
    const theme = useTheme()
    const dispatch = useDispatch()
    return (
        <Box sx={{ width: "320px", height: "100vh" }}>
            <Stack sx={{ height: "100vh" }}>
                {/* header */}
                <Box sx={{ boxShadow: "0px 0px 2px rgba(0,0,0, 0.25)", width: "100%", backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background }}>
                    <Stack sx={{ height: "100%", p: 2 }} direction="row" alignItems={"center"} justifyContent="space-between" spacing={3}>
                        <Typography variant='subtitle2'>
                            Contact Info
                        </Typography>
                        <IconButton onClick={() => {
                            dispatch(ToggleSidebar())
                        }}>
                            <X />
                        </IconButton>
                    </Stack>
                </Box>
                {/* body */}
                <Stack sx={{height: "100vh", position: "relative", flexGrow: 1, overflow:"scroll"}} p={3} spacing={3}>
<Stack alignItems={"center"} direction={"row"} spacing={2}>
    <Avatar src={faker.image.avatar()} alt={faker.name.firstName()} sx={{height: 64, width: 64}}/>
<Stack spacing={0.5}>
<Typography variant='article' fontWeight={600}>
{faker.name.fullName()}
</Typography>
</Stack>
</Stack>
                </Stack>
            </Stack>
        </Box>
    );
};

export default Contact;