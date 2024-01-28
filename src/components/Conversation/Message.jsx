import { Box, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { Chat_History } from '../../data';
import { DocMsg, LinkMsg, MediaMsg, ReplyMsg, TextMsg, Timeline } from './MsgTypes';
import { useDispatch, useSelector } from 'react-redux';
import { socket } from '../../Socket';
import { FetchCurrentMessages, SetCurrentConversation } from '../../redux/slices/conversation';

const Message = ({menu}) => {
  const dispatch = useDispatch();

  const { conversations, current_messages } = useSelector(
    (state) => state.conversation.direct_chat
  );
  const { room_id } = useSelector((state) => state.app);

  useEffect(() => {
    const current = conversations.find((el) => el?.id === room_id);

    if (current) {
      socket.emit("get_messages", { conversation_id: current?.id }, (data) => {
        console.log("List of messages", data);
        dispatch(FetchCurrentMessages({ messages: data }));
        
      });

      dispatch(SetCurrentConversation(current));
    }
  }, [dispatch, conversations, room_id]);
    return (
      <Box p={3}>
          <Stack spacing={3}>
        {current_messages.map((el, idx) => {
          switch (el.type) {
            case "divider":
              return (
                // Timeline
                <Timeline el={el} />
              );

            case "msg":
              switch (el.subtype) {
                case "img":
                  return (
                    // Media Message
                    <MediaMsg el={el} menu={menu} />
                  );

                case "doc":
                  return (
                    // Doc Message
                    <DocMsg el={el} menu={menu} />
                  );
                case "Link":
                  return (
                    //  Link Message
                    <LinkMsg el={el} menu={menu} />
                  );

                case "reply":
                  return (
                    //  ReplyMessage
                    <ReplyMsg el={el} menu={menu} />
                  );

                default:
                  return (
                    // Text Message
                    <TextMsg el={el} menu={menu} />
                  );
              }

            default:
              return <></>;
          }
        })}
      </Stack>
      </Box>
    );
  };
  

export default Message;