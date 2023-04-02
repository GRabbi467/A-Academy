import React from 'react';
import HomeUpper from './Home-1/HomeUpper';
import HomeMiddle from './Home-middle/HomeMiddle';
import HomeLower from './Home-lower/HomeLower';
import Footer from '../Footer/Footer';
import './Home.css';

const Home = () => {
  return (
    <div>
      <HomeUpper></HomeUpper>
      <HomeMiddle></HomeMiddle>
      <HomeLower></HomeLower>
      <Footer></Footer>
    </div>
  );
};

export default Home;