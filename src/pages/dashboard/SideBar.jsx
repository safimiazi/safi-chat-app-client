import { useTheme } from '@emotion/react';
import { Avatar, Box, Divider, IconButton, Stack, Switch } from '@mui/material';
import React, { useState } from 'react';
import Logo from "../../assets/Images/logo.ico"
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import styled from "@emotion/styled";
import useSettings from "../../hooks/useSettings"




const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 40,
    height: 16,
  
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(24px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.primary.main,
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));
const SideBar = () => {
    const [selected, setSelected] = useState(0);
    const { onToggleMode } = useSettings()

    const theme = useTheme()
    return (
        <Box p={2} sx={{ backgroundColor: theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)", height: "100vh", width: "100px" }}>
          <Stack direction="column" justifyContent="space-between" alignItems={"center"} sx={{ height: "100%", width: "100%" }} spacing={3}>
            <Stack alignItems="center" spacing={4}>
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  height: 64,
                  width: 64,
                  borderRadius: 1.5,
                }}
              >
                <img src={Logo} alt="chat logo" />
              </Box>
              <Stack sx={{ width: "max-content" }} direction="column" alignItems="center" spacing={3}>
                {
                  Nav_Buttons.map(singleIcon => (
                    singleIcon.index === selected ?
                      <Box sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
                        <IconButton sx={{ width: "max-content", color: "#fff" }} key={singleIcon.index}>
                          {singleIcon.icon}
                        </IconButton>
                      </Box>
                      :
                      <IconButton
                        onClick={() => {
                          setSelected(singleIcon.index)
                        }}
                        sx={{ width: "max-content", color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary }} key={singleIcon.index}>
                        {singleIcon.icon}
                      </IconButton>
                  ))

                }
                <Divider sx={{ width: "48px" }}></Divider>
                {
                  selected === 3 ?
                    <Box sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
                      <IconButton sx={{ color: "#fff" }}>
                        <Gear></Gear>
                      </IconButton>
                    </Box>
                    :
                    <IconButton sx={{ color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary }} onClick={() => {
                      setSelected(3)
                    }}>
                      <Gear></Gear>
                    </IconButton>
                }

              </Stack>
            </Stack>

            <Stack spacing={4}>
              <AntSwitch onClick={() => {
                onToggleMode()
              }} defaultChecked></AntSwitch>
              <Avatar src={faker.image.avatar()}></Avatar>
            </Stack>
          </Stack>

        </Box>
    );
};

export default SideBar;