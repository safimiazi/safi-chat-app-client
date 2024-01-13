import React from 'react';
import { Stack, Typography, Container } from '@mui/material';
import VerifyForm from '../../Sections/Auth/VerifyForm';

const Verify = () => {

    return (
        <>
            <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
                <Typography variant='h4'>Please Verify OTP</Typography>
                <Stack direction={"row"} spacing={0.5}>
                    <Typography variant='body2'>Sent to email (mohibulla@gmail.com)</Typography>
                </Stack>
            </Stack>
            {/* verify form */}
            <VerifyForm/>
        </>
    );
};

export default Verify;
