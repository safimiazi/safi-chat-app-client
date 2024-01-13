import React from 'react';
import { Stack, Typography, Container } from '@mui/material';

const Verify = () => {

    return (
        <Container>
            <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
                <Typography variant='h4'>Please Verify OTP</Typography>
                <Stack>
                    <Typography>Sent to email (mohibulla@gmail.com)</Typography>
                </Stack>
            </Stack>
        </Container>
    );
};

export default Verify;
