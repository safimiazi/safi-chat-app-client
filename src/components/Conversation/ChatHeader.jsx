import React from 'react';
import { faker } from '@faker-js/faker';
import { Avatar, Badge, Box, Divider, Icon, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { CaretDown, LinkSimple, MagnifyingGlass, PaperPlaneTilt, Phone, Smiley, VideoCamera } from 'phosphor-react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import StyledBadge from '../StyledBadge';


const ChatHeader = () => {
    const theme = useTheme()
    return (
        <Box p={2} sx={{ height: "100px", width: "100%", backgroundColor:theme.palette.mode === "light" ?  "#F8FAFF" : theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25" }}>
        <Stack alignItems={"center"} direction="row" justifyContent={"space-between"} sx={{ width: "100%", height: "100%" }}>
            <Stack direction={"row"} spacing={2}>
                <Box>
                    {/* style badge */}
                    <StyledBadge overlap='circular'
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
        }}
        variant='dot'
    >
        <Avatar alt={faker.name.fullName()} src={faker.image.avatar()}></Avatar>
    </StyledBadge>

                </Box>
                <Stack spacing={0.2}>
                    <Typography variant='subtitle2'>
                        {faker.name.fullName()}
                    </Typography>
                    <Typography variant='caption'>
                        online
                    </Typography>
                </Stack>
            </Stack>
            <Stack direction={"row"} alignItems={"center"} spacing={3}>
                <IconButton>
                    <VideoCamera />
                </IconButton>
                <IconButton>
                    <Phone />
                </IconButton>
                <IconButton>
                    <MagnifyingGlass />
                </IconButton>
                <Divider orientation='vertical' flexItem />
                <IconButton>
                    <CaretDown />
                </IconButton>
            </Stack>

        </Stack>
    </Box>
    );
};

export default ChatHeader;