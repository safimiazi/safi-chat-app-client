import { useTheme } from "@emotion/react";
import { Outlet } from "react-router-dom";
import Stack from '@mui/material/Stack';
import SideBar from "../../pages/dashboard/SideBar";



const DashboardLayout = () => {
  const theme = useTheme()
  console.log(theme);

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
