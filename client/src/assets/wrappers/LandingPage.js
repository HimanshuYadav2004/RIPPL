import styled from 'styled-components';

const Wrapper = styled.section`
  /* Default Styles (Baseline for Tablets/Mid-Sized Screens: 601px to 991px) 
  */
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    /* Tablet/Mid-screen default is single column */
    grid-template-columns: 1fr;
    align-items: center;
    margin-top: -3rem;
  }
  
  h1 {
    font-weight: 400;
    font-size: 3rem; /* Mid-screen H1 size */
    span {
      color: #457B9D;
    }
    margin-bottom: 1.5rem;
    margin-top: 2.2rem;
  }
  
  p {
    line-height: 2;
    color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
    max-width: 35em;
  }
  
  .register-link {
    margin-right: 1rem;
  }
  
  .main-img {
    margin: 2rem -1rem;
    display: block;
    display: flex;
    align-items: center /* Hidden by default */
  }
  
  .btn {
    padding: 0.75rem 1rem;
  }
  
  /* 📱 Mobile Styles (max-width: 600px) - This must come first or use 'max-width' properly */
  @media (max-width: 600px) {
    .page {
      /* Explicitly ensure single column on small screens */
      grid-template-columns: 1fr;
      column-gap: 0;
    }
    h1 {
      /* Specific, smaller font size for mobile */
      font-size: 2rem;
      margin-top: 1.5rem; /* Tighter spacing on mobile */
    }
    p {
        max-width: 100%; /* Adjust paragraph width for smaller screens */
    }
  }

  /* 🖥️ Desktop / Large Tablet Styles (min-width: 992px) */
  @media (min-width: 992px) {
    .page {
      /* Two-column layout for desktop */
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
    .main-img {
      /* Show image on desktop */
      display: block;
    }
    h1 {
        /* Larger font size for desktop */
        font-size: 3.5rem;
    }
  }
`;

export default Wrapper;