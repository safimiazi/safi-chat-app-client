import { Box, Typography, useTheme } from '@mui/material';
import { Stack } from 'phosphor-react';
import React from 'react';

const Contact = () => {
    const theme = useTheme()
    return (
        <Box sx={{ width: "320px", height: "100vh" }}>
            <Stack sx={{ height: "100vh" }}>
                <Box sx={{ boxShadow: "0px 0px 2px rgba(0,0,0, 0.25)", width: "100%", backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background }}>
<Stack sx={{height: "100%", p:2}} direction="row" alignItems={"center"} justifyContent="space-between" spacing={3}>
<Typography>
    
</Typography>
</Stack>

                </Box>
            </Stack>
        </Box>
    );
};

export default Contact;