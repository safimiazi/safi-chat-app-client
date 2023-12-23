import { Box, IconButton, Stack, Typography, useTheme } from '@mui/material';
import { X } from 'phosphor-react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { ToggleSidebar } from '../redux/slices/Apps';

const Contact = () => {
    const theme = useTheme()
    const dispatch = useDispatch()
    return (
        <Box sx={{ width: "320px", height: "100vh" }}>
            <Stack sx={{ height: "100vh" }}>
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
            </Stack>
        </Box>
    );
};

export default Contact;