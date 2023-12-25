import { Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from "react-router-dom"
import React from 'react';

const Login = () => {
    return (
        <>
            <Stack spacing={1} sx={{ mb: 5, position: "relative" }}>
                <Typography variant="h4">Login to Safichat</Typography>
                <Stack direction={"row"} spacing={0.5}>
                    <Typography variant='body2'>New User?</Typography>
                    <Link to={"/auth/register"} component={RouterLink} variant="subtitle2">
                        Create an account
                    </Link>
                </Stack>
                {/* Login Form here */}
                {/* auth social */}
            </Stack>
        </>
    );
};

export default Login;