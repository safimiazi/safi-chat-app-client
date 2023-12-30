import { Box, Divider, IconButton, Link, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/Search';
import { MagnifyingGlass, Plus } from 'phosphor-react';
import { useTheme } from '@emotion/react';
import { SimpleBarStyle } from '../../components/Scrollbar';
import { CallLogElement } from '../../components/CallElements';
import { CallLogs } from '../../data';
import StartCall from '../../Sections/Main/StartCall';

const Call = () => {
    const theme = useTheme()
    const [ openDialog, setOpenDialog] = useState(false)

    const handleCloseDialog = () => {
        setOpenDialog(false)
    }
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
                                setOpenDialog(true)
                            }}>
                                <Plus style={{ color: theme.palette.primary.main }} />
                            </IconButton>
                        </Stack>
                        <Divider />
                        <Stack spacing={3} sx={{ flexGrow: 1, overflowY: "auto", height: "100%" }}>
                            <SimpleBarStyle timeout={500} clickOnTrack={false}>
                                <Stack spacing={2.5}>
                                    {/*  */}
                                    {/* Call Logs */}
                                 {CallLogs.map((el)=>   <CallLogElement {...el} />)}
                                </Stack>

                            </SimpleBarStyle>
                        </Stack>
                    </Stack>
                </Box>
                {/* Right */}
                {/* // TODO => Reuse Conversation Components */}
            </Stack>  
            {openDialog && <StartCall open={openDialog} handleClose={handleCloseDialog}/>}

        </>
    );
};

export default Call;