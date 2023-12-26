import { Link, Stack, Typography } from '@mui/material';
import { CaretLeft } from 'phosphor-react';
import React from 'react';
import {Link as RouterLink} from "react-router-dom"

const ResetPassword = () => {
    return (
        <>
            <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
                <Typography variant='h3' paragraph>
                    Forget Your Password?
                </Typography>
                <Typography sx={{ color: "text.secondary", mb: 5 }}>
                    Please enter the emeil address associated with your account and we
                    will email you a link to reset your password.
                </Typography>
                {/* reset password form */}
                <Link component={RouterLink} to="/auth/login" color="inherit" variant='subtitle2' sx={{mt:3, mx:"auto", alignItems: "center", display: "inline-flex"}}>
                <CaretLeft/>
                Return to sign in
                </Link>
            </Stack>
        </>
    );
};

export default ResetPassword;