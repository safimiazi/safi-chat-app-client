import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// layouts
import DashboardLayout from "../layouts/dashboard";
import MainLayout from "../layouts/main";

// config
import { DEFAULT_PATH } from "../config";
import LoadingScreen from "../components/LoadingScreen";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/auth",
      element: <MainLayout/>,
      children: [
        { element: <LoginPage />, path: "login" },
        { element: <RegisterPage />, path: "register" },
        { element: <ResetPasswordPage />, path: "reset-password" },
        { element: <NewPasswordPage />, path: "new-password" },
        { element: <ProfilePage />, path: "profile" },
      ]
    },
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "app", element: <GeneralApp /> },
        { path: "settings", element: <Settings /> },
        { path: "group", element: <GroupPages /> },
        { path: "call", element: <CallPages /> },



        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}

const GeneralApp = Loadable(
  lazy(() => import("../pages/dashboard/GeneralApp")),
);
const LoginPage = Loadable(
  lazy(() => import("../pages/Auth/Login")),
);
const RegisterPage = Loadable(
  lazy(() => import("../pages/Auth/Register")),
);
const ResetPasswordPage = Loadable(
  lazy(() => import("../pages/Auth/ResetPassword")),
);
const NewPasswordPage = Loadable(
  lazy(() => import("../pages/Auth/NewPassword")),
);
const Settings = Loadable(
  lazy(() => import("../pages/dashboard/Settings")),
);
const GroupPages = Loadable(
  lazy(() => import("../pages/dashboard/Group")),
);
const CallPages = Loadable(
  lazy(() => import("../pages/dashboard/Call")),
);

const ProfilePage = Loadable(lazy(()=> import("../pages/dashboard/Profile")))
const Page404 = Loadable(lazy(() => import("../pages/Page404")));
