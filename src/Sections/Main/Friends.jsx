import { Dialog, DialogContent, Stack, Tab, Tabs } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FetchFriendRequests, FetchFriends, FetchUsers } from '../../redux/slices/Apps';
import { FriendComponent, FriendRequestComponent, UserComponent } from '../../components/Friends';



const UsersList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FetchUsers());
    }, []);

    const { users } = useSelector((state) => state.app)
    console.log("users", users);
    return (
        <>
            {users.map((el, idx) => {
                // TODO => Render UserComponents
                return <UserComponent key={idx} {...el} />
            })}
        </>
    );
};


const FriendsList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FetchFriends());
    }, []);

    const { friends } = useSelector((state) => state.app)
    console.log("friends list", friends);
   try {
        return (
            <>
                {friends?.map((el, idx) => {
                    // TODO => Render Friend Components
                    return <FriendComponent key={el._id} {...el} />;
                })}
            </>
        );
    } catch (error) {
        console.error("Error rendering friends:", error);
        // You can handle the error here, for example, display an error message or log it
        return <div>Error rendering friends. Please try again later.</div>;
    }
};
const FriendRequestList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FetchFriendRequests());
    }, []);

    const { friendRequests } = useSelector((state) => state.app)
    console.log("firend request", friendRequests);
    return (
        <>
            {friendRequests.map((el, idx) => {
                //el => {_id, sender: {_id, firstName, lastName, img, online}}

                // TODO => Render Friend request Components
                return <FriendRequestComponent key={el._id} {...el.sender} id={el._id} />

            })}
        </>
    );
};





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
                        {(() => {
                            switch (value) {
                                case 0: //display all users
                                    return <UsersList />

                                case 1: //display all friends
                                    return <FriendsList />

                                case 2: // display all friend requests
                                    return <FriendRequestList />

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