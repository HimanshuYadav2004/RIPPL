import React, { createContext, useContext, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { BigSideBar, SmallSideBar, NavBar , } from '../components';
import Wrapper from '../assets/wrappers/Dashboard';
import ThemeToggle from '../components/ThemeToggle';
import { checkDefaultTheme } from '../App';

const DashboardContext = createContext();



const DashboardLayout = () =>
{
  const user = { name: "akash" };
  const [ showSidebar, setShowSidebar ] = useState( false );
  const [ isDarkTheme, setIsDarkTheme ] = useState( checkDefaultTheme() );

  const toggleDarkTheme = () =>
  {
    const newDarkTheme = !isDarkTheme
    setIsDarkTheme(newDarkTheme)
    document.body.classList.toggle('dark-theme', newDarkTheme);
    localStorage.setItem('darkTheme',newDarkTheme)

  };
  const toggleSidebar = () =>
  { 
    console.log( 'side bar toggle' );
    setShowSidebar(!showSidebar);
    
  };
  const logoutUser = async () =>
  {
    console.log( 'logout user' );

  };


  return (
    <DashboardContext.Provider value={ { user, showSidebar, isDarkTheme, toggleDarkTheme, toggleSidebar, logoutUser } }>
      <Wrapper>
        <main className="dashboard">
          <SmallSideBar />
          <BigSideBar />
          <div>
            <NavBar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext( DashboardContext );

export default DashboardLayout;