import { Dialog, DialogContent, Stack, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react';



const UsersList = () => {
    return (
        <>
            {}
        </>
    );
};

export default Friends;


const Friends = ({ open, handleClose }) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <Dialog fullWidth maxWidth="xs" open={open} keepMounted onClose={handleClose} sx={{ p: 4 }}>
            <Stack p={2} sx={{ width: "100%" }}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="Explore" />
                    <Tab label="Friends" />
                    <Tab label="Requests" />
                </Tabs>
            </Stack>
            {/* dialog content */}
            <DialogContent>
                <Stack sx={{ height: "100%" }}>
                    <Stack spacing={2.5}>
{(()=> {
switch (value) {
    case 0: //display all users
        
        break;
    case 1: //display all friends
        
        break;
    case 2: // display all friend requests
        
        break;

    default:
        break;
}
})()}
                    </Stack>
                </Stack>
            </DialogContent>
        </Dialog>
    );
};

export default Friends;