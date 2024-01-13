import { Stack, Typography } from '@mui/material';
import React from 'react';

const Verify = () => {
    return (
        <>
           <Stack spacing={2} sx={{mb:5, position: "relative"}}>
            <Typography>Please Verify OTP</Typography>
            <Stack>
                <Typography>Sent to email {mohibulla@gmail.com}</Typography>
            </Stack>
            </Stack> 
        </>
    );
};

export default Verify;