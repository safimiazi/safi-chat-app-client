import { Avatar, Box, IconButton, Stack, Typography, useTheme } from '@mui/material';
import { Phone } from 'phosphor-react';
import React from 'react';

const CallLogElement = () => {
    const theme = useTheme()
    return (
        <>
            <Box
                sx={{
                    width: "100%",

                    borderRadius: 1,
                    backgroundColor: theme.palette.mode === "light" ? "#fff" : theme.palette.background.default,

                }}
                p={2}
            >
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <Stack>
                        <Avatar/>
                    </Stack>
                    <Stack>
                        <IconButton>
                            <Phone/>
                        </IconButton>
                    </Stack>
                </Stack>
            </Box>
        </>
    );
};

const CallElement = () => {

}

export { CallLogElement, CallElement };