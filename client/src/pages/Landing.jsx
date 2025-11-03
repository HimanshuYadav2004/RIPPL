import React from 'react'
import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import Logo from '../components/Logo';
import main from '../assets/images/interview.svg'
import { Link } from 'react-router-dom';



const Landing = () =>
{
  return (
    <Wrapper>
      <nav>
        <Logo/>
      </nav>
      <div className="container page ">
        <div className="info">
          <h1 style={ { color:"#1D3557"}}>Make your job search <span style={ { color:"#02eeff"}}> flow...</span></h1>
          <p>
            <b>Welcome to Rippl </b> <br></br>
            <i>Stop searching, start landing.</i> <br></br>

            Your job hunt deserves clarity, not chaos. Rippl is the dedicated job application tracker that replaces scattered notes and messy spreadsheets. Log applications, manage interviews, and track every follow-up with effortless precision. Get organized, stay focused, and turn the tide on your job search.
          </p>
          <Link to='/Register' className='btn register-link'>Register</Link>
          <Link to='/Login' className='btn'>Login/Test</Link>
        </div>
        <img src={main} alt="job hunt made simple" className='img main-img' />

      </div>
     
    </Wrapper>
  );
};



export default Landing