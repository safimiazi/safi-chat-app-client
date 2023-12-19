import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/Conversation/Conversation";
import { useTheme } from "@emotion/react";

const GeneralApp = () => {
const theme = useTheme()
  return (
    <Stack direction={"rew"} sx={{ width: "100%" }}>
      {/* chats */}
      <Chats></Chats>


      <Box sx={{ height: "100%", width: "calc(100vw - 420px)", backgroundColor: theme.palette.mode === "light" ? "#F0F4FA" : theme.palette.background.default }}>
        {/* conversation */}
        <Conversation>

        </Conversation>
      </Box>
    </Stack>
  );
};

export default GeneralApp;
