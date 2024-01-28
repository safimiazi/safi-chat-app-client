import { useTheme } from "@emotion/react";
import { Navigate, Outlet } from "react-router-dom";
import Stack from '@mui/material/Stack';
import SideBar from "../../pages/dashboard/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { connectSocket, socket } from "../../Socket";
import { SelectConversation, showSnackbar } from "../../redux/slices/Apps";
import { AddDirectConversation, AddDirectMessage, UpdateDirectConversation } from "../../redux/slices/conversation";



const DashboardLayout = () => {
  const { conversations } = useSelector((state) => state.conversation.direct_chat)
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector((state) => state.auth)
  const { current_conversation } = useSelector( (state) => state?.conversation?.direct_chat);

  const theme = useTheme()
  console.log(theme);
  const user_id = window.localStorage.getItem("user_id");

  useEffect(() => {
    if (isLoggedIn) {
      window.onload = function () {
        if (!window.location.hash) {
          window.location = window.location + "#loaded";
          window.location.reload();
        }
      };

      window.onload();


      if (!socket) {
        connectSocket(user_id)
      }

      //"new_friend_request"
      socket.on("new_message", (data) => {
        const message = data.message;
        console.log("akash", message);
        console.log(current_conversation, data);
        // check if msg we got is from currently selected conversation
        if (current_conversation?.id === data.conversation_id) {
          dispatch(
            AddDirectMessage({
              id: message._id,
              type: "msg",
              subtype: message.type,
              message: message.text,
              incoming: message.to === user_id,
              outgoing: message.from === user_id,
            })
          );
        }
      });



      socket.on("new_friend_request", (data) => {
        console.log("datadata", data);
     
        dispatch(showSnackbar({ severity: "success", message: data.message }))
      });
      socket.on("request_accepted", (data) => {
        dispatch(showSnackbar({ severity: "success", message: data.message }))
      });
      socket.on("request_sent", (data) => {
        dispatch(showSnackbar({ severity: "success", message: data.message }))
      });

      socket.on("start_chat", (data) => {
        console.log("forid vai", data);
        const existing_conversation = conversations.find((el) => el.id === data._id)
        if (existing_conversation) {
          dispatch(UpdateDirectConversation({ conversations: data }))
        } else {
          dispatch(AddDirectConversation({ conversations: data }))
        }
        dispatch(SelectConversation({ room_id: data._id }))
      })

    }

    return () => {
      socket?.off("new_friend_request");
      socket?.off("request_accepted");
      socket?.off("request_sent");
      socket?.off("start_chat")
    }
  }, [isLoggedIn, socket])



  if (!isLoggedIn) {
    return <Navigate to="/auth/login" />
  }

  return (
    <>
      <Stack direction="row">
        {/* sidebar */}
        <SideBar></SideBar>
        <Outlet />
      </Stack>
    </>
  );
};

export default DashboardLayout;
