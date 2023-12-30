import { useTheme } from "@emotion/react";
import { Navigate, Outlet } from "react-router-dom";
import Stack from '@mui/material/Stack';
import SideBar from "../../pages/dashboard/SideBar";

const isAuthenticated = true;

const DashboardLayout = () => {
  const theme = useTheme()
  console.log(theme);
  
if(!isAuthenticated) {
  return <Navigate to="/auth/login"/>
}

  return (
    <>
      <Stack direction="row">
        {/* sidebar */}
        <SideBar></SideBar>
        <Outlet />
      </Stack>
    </>
  );
};

export default DashboardLayout;
