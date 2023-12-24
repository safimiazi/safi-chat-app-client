import { Box, IconButton, Stack, Tab, Tabs, Typography, useTheme } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { UpdateSidebarType } from '../redux/slices/Apps';
import { CaretLeft, X } from 'phosphor-react';

const SharedMessage = () => {
    const theme = useTheme()
    const dispatch = useDispatch()
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ width: 320, height: "100vh" }}>
            <Stack sx={{ height: "100%" }}>
                <Box sx={{ boxShadow: "0px 0px 2px rgba(0,0,0, 0.25)", width: "100%", backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background }}>
                    <Stack sx={{ height: "100%", p: 2 }} direction="row" alignItems={"center"} spacing={3}>
                        <IconButton onClick={() => {
                            dispatch(UpdateSidebarType("CONTACT"))
                        }}>
                            <CaretLeft />
                        </IconButton>
                        <Typography variant='subtitle2'>
                            Shared Messages
                        </Typography>

                    </Stack>
                </Box>
                {/* body */}
                <Tabs sx={{px:2, pt: 2}} value={value} onChange={handleChange} centered>
                    <Tab label="Media" />
                    <Tab label="Links" />
                    <Tab label="Docs" />
                </Tabs>
                <Stack sx={{ height: "100vh", position: "relative", flexGrow: 1, overflow: "auto" }} p={3} spacing={3}>
{(()=>{
switch (value) {
    case 0:
        //images
        break;
    case 1:
        //links
        break;
    case 2:
        //docs
        break;

    default:
        break;
}
})()}
                </Stack>
            </Stack>
        </Box>
    );
};

export default SharedMessage;