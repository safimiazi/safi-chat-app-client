import { Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
    <Container>
      <div>Main Layout</div>

      <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
