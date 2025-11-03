import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import
  {
    AddJob,
    Admin,
    AllJobs,
    DashboardLayout,
    DeleteJob,
    EditJob,
    Error,
    HomeLayout,
    Landing,
    Login,
    Profile,
    Register,
    Stats,
  } from "./pages";

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme
}

checkDefaultTheme()

const router = createBrowserRouter( [
  {
    path: "/",
    element: <HomeLayout />,
    errorElement:<Error/>,
    children: [
      { index: true, element: <Landing /> },

      { path: "AddJob", element: <AddJob /> },
      { path: "Admin", element: <Admin /> },
      { path: "AllJobs", element: <AllJobs /> },
      { path: "DeleteJob", element: <DeleteJob /> },
      { path: "EditJob", element: <EditJob /> },
      { path: "Error", element: <Error /> },
      { path: "Login", element: <Login /> },
      { path: "Profile", element: <Profile /> },
      { path: "Register", element: <Register /> },
      { path: "Stats", element: <Stats /> },
      {
        path: "Dashboard",
        element: <DashboardLayout  />, children: [
          {
            path: "Add-Job",
            index:true,element: <AddJob />
          },
          { path: "All-Jobs", element: <AllJobs /> },
          { path: "Delete-Job", element: <DeleteJob /> },
          { path: "Edit-Job", element: <EditJob /> },
          { path: "Profile", element: <Profile /> },
          { path: "Stats", element: <Stats /> },
          {path:"Admin", element:<Admin/>}

          
      ]},
    ],
  },
] );

const App = () =>
{
  return <RouterProvider router={ router } />;
};

export default App;
