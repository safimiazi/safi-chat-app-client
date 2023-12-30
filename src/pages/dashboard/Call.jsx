import { Box, Divider, IconButton, Link, Stack, Typography } from '@mui/material';
import React from 'react';
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/Search';
import { MagnifyingGlass, Plus } from 'phosphor-react';
import { useTheme } from '@emotion/react';
import { SimpleBarStyle } from '../../components/Scrollbar';

const Call = () => {
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
                            <Typography variant='h5'>Call Logs</Typography>
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
                            <Typography variant='subtitle2' component={Link}>Start New Conversation</Typography>
                            <IconButton onClick={()=> {
                                // setOpenDialog(true)
                            }}>
                                <Plus style={{ color: theme.palette.primary.main }} />
                            </IconButton>
                        </Stack>
                        <Divider />
                        <Stack spacing={3} sx={{ flexGrow: 1, overflowY: "auto", height: "100%" }}>
                            <SimpleBarStyle timeout={500} clickOnTrack={false}>
                                <Stack spacing={2.5}>
                                    {/*  */}
                                    <Typography variant='subtitle2' sx={{ color: "#676667" }}>Pinned</Typography>
                                    {/* Call Logs */}
                                   
                                </Stack>

                            </SimpleBarStyle>
                        </Stack>
                    </Stack>
                </Box>
                {/* Right */}
                {/* // TODO => Reuse Conversation Components */}
        {/* {openDialog && <CreateGroup open={openDialog} handleClose={handleCloseDialog}/>} */}
            </Stack>  
        </>
    );
};

export default Call;