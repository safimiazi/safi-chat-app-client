
import React from 'react';
import ChatHeader from './ChatHeader';
import { Box, Stack } from '@mui/material';
import ChatFooter from './ChatFooter';
import Message from './Message';


const Conversation = () => {

    return (
        <Stack height={"100%"} maxHeight={"100vh"} width={"auto"} >
            {/* chat header */}
            <ChatHeader></ChatHeader>
            {/* msg */}
            <Box  overflow="auto" width={"100%"} sx={{ flexGrow: 1 }}>
                <Message></Message>
            </Box>
            {/* chat footer */}
            <ChatFooter></ChatFooter>
        </Stack>
    );
};

export default Conversation;