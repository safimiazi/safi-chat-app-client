import { Stack, Typography } from '@mui/material';
import React from 'react';

const NewPassword = () => {
    return (
        <>
           <Stack spacing={2} sx={{mb:5, position: "relative"}}>
           <Typography variant='h3' paragraph>
                    Reset Password?
                </Typography>
                <Typography sx={{ color: "text.secondary", mb: 5 }}>
                    Please your new password
                </Typography>
            </Stack> 
            {/* new password form */}
        </>
    );
};

export default NewPassword;