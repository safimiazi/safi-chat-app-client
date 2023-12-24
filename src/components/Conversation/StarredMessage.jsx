import { Box, IconButton, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { CaretLeft, } from 'phosphor-react';
import { UpdateSidebarType } from '../../redux/slices/Apps';


const StarredMessage = () => {
    const theme = useTheme()
    const dispatch = useDispatch()

    return (
        <Box sx={{ width: 320, height: "100vh" }}>
            <Stack sx={{ height: "100%" }}>
                <Box sx={{ boxShadow: "0px 0px 2px rgba(0,0,0, 0.25)", width: "100%", backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background }}>
                    <Stack sx={{ height: "100%", p: 2 }} direction="row" alignItems={"center"} spacing={3}>
                        <IconButton onClick={() => {
                            dispatch(UpdateSidebarType("CONTACT"))
                        }}>
                            <CaretLeft />
                        </IconButton>
                        <Typography variant='subtitle2'>
                            Starred Message
                        </Typography>

                    </Stack>
                </Box>
                {/* body */}

                <Stack sx={{ height: "100vh", position: "relative", flexGrow: 1, overflow: "auto" }} p={3} spacing={3}>

                </Stack>
            </Stack>
        </Box>
    );
};

export default StarredMessage;