import { Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from "react-router-dom"
import React from 'react';
import RegisterForm from '../../Sections/Auth/RegisterForm';

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
            {/* Register Form */}
            <RegisterForm/>

            <Typography component={"div"} sx={{ color: "text.secondary", mt: 3, typography: "caption", textAlign: "center" }}>
                {"By Signing up, I agree to "}
                <Link underline='always' color={"text.primary"}>
                    Terms of service
                </Link>
                {" and "}
                <Link underline='always' color={"text.primary"}>
                    Privacy Policy
                </Link>
            </Typography>
        </Stack>
    );
};

export default Register;