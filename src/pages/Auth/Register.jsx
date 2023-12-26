import { Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from "react-router-dom"
import React from 'react';

const Register = () => {
    return (
        <Stack spacing={3} sx={{ mb: 5, position: "relative" }}>
            <Typography variant='h4'>
                Get Started With SafiChat
            </Typography>
            <Stack direction={"row"} spacing={0.5}>
                <Typography variant='body2'>
                    Already have a n account?
                </Typography>
                <Link component={RouterLink} to="/auth/login">Sign in</Link>
            </Stack>
        </Stack>
    );
};

export default Register;