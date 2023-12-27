import { Box, Divider, IconButton, Link, Stack, Typography, useTheme } from '@mui/material';
import React from 'react';
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/Search';
import { MagnifyingGlass, Plus } from 'phosphor-react';
import { SimpleBarStyle } from '../../components/Scrollbar';
import { ChatList } from '../../data';
import ChatElement from '../../components/ChatElements';

const Group = () => {
    const theme = useTheme()
    return (
        <>
            <Stack direction={"row"} sx={{ width: "100%" }}>
                {/* Left */}
                <Box sx={{
                    height: "100vh",
                    backgroundColor: (theme) => theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background,
                    width: 320,
                    boxShadow: "0px 0px 2px rgba(0,0, 0, 0.25)"
                }}>
                    <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
                        <Stack>
                            <Typography variant='h5'>Groups</Typography>
                        </Stack>
                        <Stack sx={{ width: "100%" }}>
                            <Search>
                                <SearchIconWrapper>
                                    <MagnifyingGlass color='#709CE6'></MagnifyingGlass>
                                </SearchIconWrapper>
                                <StyledInputBase placeholder="Search..." inputProps={{ "aria-label": "search" }}></StyledInputBase>
                            </Search>
                        </Stack>
                        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                            <Typography variant='subtitle2' component={Link}>Create New Group</Typography>
                            <IconButton>
                                <Plus style={{ color: theme.palette.primary.main }} />
                            </IconButton>
                        </Stack>
                        <Divider />
                        <Stack sx={{ flexGrow: 1, overflowY: "auto", height: "100%" }}>
                            <SimpleBarStyle timeout={500} clickOnTrack={false}>
                                <Stack>
                                    {/*  */}
                                    <Typography>Pinned</Typography>
                                    {/* chat list */}
                                    {ChatList.filter((el) => el.pinned).map((el) => {
                                        return <ChatElement {...el}></ChatElement>
                                    })}
                                </Stack>
                                <Stack>
                                    {/*  */}
                                    <Typography>All Groups</Typography>
                                    {/* chat list */}
                                </Stack>
                            </SimpleBarStyle>
                        </Stack>
                    </Stack>
                </Box>
                {/* Right */}
            </Stack>
        </>
    );
};

export default Group;