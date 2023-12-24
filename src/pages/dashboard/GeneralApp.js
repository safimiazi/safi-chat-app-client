import React from "react";
import Chats from "./Chats";
import { Box, Stack } from "@mui/material";
import Conversation from "../../components/Conversation/Conversation";
import { useTheme } from "@emotion/react";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMessage from "../../components/SharedMessage";
import DefaultComponent from "../../components/SharedMessage";
import StarredMessage from "../../components/Conversation/StarredMessage";

const GeneralApp = () => {
  const theme = useTheme()
  const { sidebar } = useSelector((store) => store.app);

  return (
    <Stack direction={"rew"} sx={{ width: "100%" }}>
      {/* chats */}
      <Chats />

      <Box sx={{ height: "100%", width: sidebar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)", backgroundColor: theme.palette.mode === "light" ? "#F0F4FA" : theme.palette.background.default }}>
        {/* conversation */}
        <Conversation />
      </Box>
      {/* contact */}
      {
        sidebar?.open && (() => {
          switch (sidebar?.type) {
            case "CONTACT":
              return <Contact />;

            case "STARRED":
              // return some component for "STARRED" case
              return <StarredMessage />;

            case "SHARED":
              return <SharedMessage />;

            default:
              // return a default component or null if no match
              return <DefaultComponent />;
          }
        })()
      }
    </Stack>
  );
};

export default GeneralApp;
