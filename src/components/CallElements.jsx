import { faker } from '@faker-js/faker';
import { Avatar, Box, IconButton, Stack, Typography, useTheme } from '@mui/material';
import { ArrowDownLeft, ArrowUpRight, Phone } from 'phosphor-react';
import React from 'react';
import StyledBadge from './StyledBadge';

const CallLogElement = ({ online, incoming, missed }) => {
    const theme = useTheme()
    return (
        <>
            <Box
                sx={{
                    width: "100%",

                    borderRadius: 1,
                    backgroundColor: theme.palette.mode === "light" ? "#fff" : theme.palette.background.default,

                }}
                p={2}
            >
                <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
                    <Stack direction={"row"} alignItems={"center"} spacing={2}>
                        {online ? <StyledBadge
                            overlap='circular'
                            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                            variant='dot'
                        >
                            <Avatar src={faker.image.avatar} alt={faker.name.fullName()}></Avatar>
                        </StyledBadge> : <Avatar src={faker.image.avatar} alt={faker.name.fullName()}></Avatar>
                        }
                        <Stack spacing={0.3}>
                            <Typography variant='subtitle2'>
                                {faker.name.fullName()}
                            </Typography>

                            <Stack direction={"row"} alignItems={"center"} spacing={1}>
                                {incoming ? <ArrowDownLeft color={missed ? "red" : "green"} /> : <ArrowUpRight color={missed ? "red" : "green"} />}
                                <Typography variant='caption'>Yesterday 21:24</Typography>
                            </Stack>
                        </Stack>

                    </Stack>
                    <IconButton>
                        <Phone color='green'/>
                    </IconButton>
                </Stack>
            </Box>
        </>
    );
};

const CallElement = () => {

}

export { CallLogElement, CallElement };