import React from 'react';
import { FaAlignLeft } from "react-icons/fa";
import Logo from './Logo';
import { useDashboardContext } from './../pages/DashboardLayout';
import LogoutContainer from './LogoutContainer';
import ThemeToggle from './ThemeToggle';
import Wrapper from '../assets/wrappers/Navbar';


const NavBar = () =>
{
    const { toggleSidebar , toggleDarkTheme} = useDashboardContext()
    
    return (
        <Wrapper>
         <div className="nav-center">
            <button type='button' className="toggle-btn" onClick={toggleSidebar}>
<FaAlignLeft/>
            </button>
            <div>
                <Logo/>
                    <h4 className="logo-text">Dashboard</h4>
                    
            </div>
                <div className="btn-container">
                    <ThemeToggle/>
              <LogoutContainer/>
            </div>
         </div>
        </Wrapper>
    );
};

export default NavBar;
