import { Box, Stack, useTheme } from '@mui/material';
import React from 'react';

const Settings = () => {
    const theme = useTheme()
    return (
        <>
          <Stack direction={"row"} sx={{width: "100%"}}>
{/* left pannel */}
<Box sx={{overflowY: "auto",height:"100vh",width: 320, backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background, boxShadow:"0px 0px 2px rgba(0,0,0, 0.25)"}}>
<Stack>
    
</Stack>
</Box>
{/* right pannel */}
<Box>

</Box>
          </Stack>
        </>
    );
};

export default Settings;