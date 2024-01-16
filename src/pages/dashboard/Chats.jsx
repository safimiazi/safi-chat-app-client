import styled from '@emotion/styled';
import { faker } from '@faker-js/faker';
import { Avatar, Badge, Box, Button, Divider, IconButton, InputBase, Stack, Typography, alpha } from '@mui/material';
import { ArchiveBox, CircleDashed, MagnifyingGlass, Users } from 'phosphor-react';
import React from 'react';
import { ChatList } from '../../data';
import { SimpleBarStyle } from '../../components/Scrollbar';
import { useTheme } from '@emotion/react';
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/Search';
import ChatElement from '../../components/ChatElements';








const Chats = () => {
    const theme = useTheme()
    return (
        <Box sx={{ position: "relative", width: "320px", backgroundColor:theme.palette.mode === "light" ?  "#F8FAFF" : theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0,0,0,0.25" }}>
            <Stack p={3} spacing={2} sx={{ height: "100vh" }}>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography variant='h5'>
                        Chats
                    </Typography>
                    <Stack direction={"row"} alignItems={"center"} spacing={1}>
                    <IconButton>
                        <Users/>
                    </IconButton>
                    <IconButton>
                        <CircleDashed/>
                    </IconButton>
                    </Stack>
                </Stack>
                <Stack sx={{ width: "100%" }}>
                    <Search>
                        <SearchIconWrapper>
                            <MagnifyingGlass color='#709CE6'></MagnifyingGlass>
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="Search..." inputProps={{ "aria-label": "search" }}></StyledInputBase>
                    </Search>
                </Stack>
                <Stack spacing={1}>
                    <Stack direction="row" alignItems={"center"} spacing={1.5}>
                        <ArchiveBox size={24}></ArchiveBox>
                        <Button>Archive</Button>
                    </Stack>
                    <Divider />
                </Stack>
                <Stack spacing={2} direction="column" sx={{ flexGrow: 1, paddingRight:"10px", overflow: "auto", height: "100%" }}>
                    <SimpleBarStyle timeout={500}>
                        <Stack spacing={2.4}>
                            <Typography variant='subtitle2' sx={{ color: "#676767" }}>
                                Pinned
                            </Typography>
                            {ChatList.filter((el) => el.pinned).map((el) => {
                                return <ChatElement {...el}></ChatElement>
                            })}


                        </Stack>
                        <Stack spacing={2.4}>
                            <Typography paddingTop={2} variant='subtitle2' sx={{ color: "#676767" }}>
                                All Chats
                            </Typography>
                            {ChatList.filter((el) => !el.pinned).map((el) => {
                                return <ChatElement {...el}></ChatElement>
                            })}


                        </Stack>
                    </SimpleBarStyle>
                </Stack>
            </Stack>
        </Box>
    );
};

export default Chats;