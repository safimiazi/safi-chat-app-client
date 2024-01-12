import { useTheme } from "@emotion/react";
import { Navigate, Outlet } from "react-router-dom";
import Stack from '@mui/material/Stack';
import SideBar from "../../pages/dashboard/SideBar";
import { useSelector } from "react-redux";



const DashboardLayout = () => {
  const {isLoggedIn} = useSelector((state) => state.auth)
  const theme = useTheme()
  console.log(theme);
  
if(!isLoggedIn) {
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
