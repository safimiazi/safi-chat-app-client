import React, { useState } from 'react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Box, Fab, IconButton, InputAdornment, Stack, TextField, Tooltip } from '@mui/material';
import { Camera, File, Image, LinkSimple, PaperPlaneTilt, Smiley, Sticker, User } from 'phosphor-react';
import EmojiPicker from '@emoji-mart/react';
import { socket } from '../../Socket';
import { useSelector } from 'react-redux';



const StyledInput = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-input": {
        paddingTop: "12px",
        paddingBottom: "12px",
    },
}));


const Actions = [
    {
        color: "#4da5fe",
        icon: <Image size={24} />,
        y: 102,
        title: "Photo/Video"
    },
    {
        color: "#1b8cfe",
        icon: <Sticker size={24} />,
        y: 172,
        title: "Stickers"
    },
    {
        color: "#017e4",
        icon: <Camera size={24} />,
        y: 242,
        title: "Image"
    },
    {
        color: "#0159b2",
        icon: <File size={24} />,
        y: 312,
        title: "Document"
    },
    {
        color: "#013f7f",
        icon: <User size={24} />,
        y: 382,
        title: "Contact"
    }
]



const ChatInput = ({ openPicker, setOpenPicker, message, setMessage, setSelectEmoji, selectEmoji }) => {
    const [openAction, setOpenAction] = useState(false);
  
    const handleMessageChange = (event) => {
      setMessage(event.target.value);
    };
  
    return (
      <StyledInput
        fullWidth
        value={message}
        onChange={handleMessageChange}
        placeholder='Write a message...'
        variant='filled'
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <Stack sx={{ width: "max-content" }}>
              <Stack sx={{ display: openAction ? "inline-block" : "none", position: "relative" }}>
                {Actions.map((el) => (
                  <Tooltip placement='right' title={el.title} key={el.title}>
                    <Fab sx={{ position: "absolute", top: -el.y, backgroundColor: el.color }}>
                      {el.icon}
                    </Fab>
                  </Tooltip>
                ))}
              </Stack>
              <InputAdornment>
                <IconButton onClick={() => setOpenAction(!openAction)}>
                  <LinkSimple />
                </IconButton>
              </InputAdornment>
            </Stack>
          ),
          endAdornment: (
            <InputAdornment>
              <IconButton onClick={() => setOpenPicker(!openPicker)}>
                <Smiley />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    );
  };
  
  const ChatFooter = ({_id}) => {
    const theme = useTheme();
    const [openPicker, setOpenPicker] = useState(false);
    const [message, setMessage] = useState("");
    const [selectEmoji, setSelectEmoji] = useState("");
    const user_id = window.localStorage.getItem("user_id")

   
  
    const handleSendMessage = () => {
      console.log("message", message);
      // Your logic for sending the message
      if (message.trim() !== '') {
        const data = {
          message,
          conversation_id: 'your_conversation_id',
          from: user_id,
          to: 'receiver_user_id',
          type: 'text',
        };
  
        // Emit the text message to the server
        socket.emit('text_message', data);
  
        // Clear the input field
        setMessage('');
      }
    };

    //add emoji
    const addEmoji = (e) => {
      const sym = e.unified.split("_");
     const codeArray = [];
     sym.forEach((el)=> codeArray.push("0x" + el));
     let emoji = String.fromCodePoint(...codeArray);
     setMessage( message + emoji)

    }

  
    return (
      <Box
        p={2}
        sx={{
          width: "100%",
          backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        }}
      >
        <Stack direction="row" alignItems="center" spacing={3}>
          <Stack sx={{ width: "100%" }}>
            {/* chat input */}
            <Box sx={{ display: openPicker ? "inline" : "none", zIndex: 10, position: "fixed", bottom: 81, right: 100 }}>
              <EmojiPicker theme={theme.palette.mode} onEmojiSelect={addEmoji} maxFrequentRows={0}/>
            </Box>
            <ChatInput
              setSelectEmoji={setSelectEmoji}
              selectEmoji={selectEmoji}
              message={message}
              setMessage={setMessage}
              openPicker={openPicker}
              setOpenPicker={setOpenPicker}
            />
          </Stack>
          <Box onClick={handleSendMessage} sx={{ height: 48, width: 48, backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
            <Stack sx={{ height: "100%", width: "100%" }} alignItems="center" justifyContent="center">
              <IconButton>
                <PaperPlaneTilt color='#fff' />
              </IconButton>
            </Stack>
          </Box>
        </Stack>
      </Box>
    );
  };
  
  export default ChatFooter;