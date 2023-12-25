import { Box, IconButton, Stack, useTheme } from '@mui/material';
import React from 'react';

const Settings = () => {
    const theme = useTheme()
    return (
        <>
          <Stack direction={"row"} sx={{width: "100%"}}>
{/* left pannel */}
<Box sx={{overflowY: "auto",height:"100vh",width: 320, backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background, boxShadow:"0px 0px 2px rgba(0,0,0, 0.25)"}}>
<Stack p={4} spacing={5}>
{/* header */}
<Stack direction={"row"} alignItems={"center"} spacing={3}>
<IconButton>
    
</IconButton>
</Stack>
{/* profile */}
{/* list of option */}
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