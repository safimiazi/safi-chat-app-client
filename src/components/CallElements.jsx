import { Box } from '@mui/material';
import React from 'react';

const CallLogElement = () => {
    
    return (
        <>
            <Box
            sx={{
                width: "100%",

                borderRadius: 1,
                backgroundColor:theme.palette.mode === "light"? "#fff" :theme.palette.background.default,

            }}
            p={2}
        ></Box> 
        </>
    );
};

const CallElement = () => {

}

export default CallLogElement;