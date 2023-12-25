import { Divider } from '@mui/material';
import React from 'react';

const AuthSocial = () => {
    return (
        <div>
            <Divider sx={{my:2.5, typography: "overline", color: "text.disabled", "&::before, ::after": {borderTopStyle: "dashed"}}}>OR</Divider>
        </div>
    );
};

export default AuthSocial;