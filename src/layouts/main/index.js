import { Container, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
    <Container>
      <Stack spacing={5}>
<Stack sx={{width:"100%"}} direction={"column"} alignItems={"center"}>

</Stack>
      </Stack>

      <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
