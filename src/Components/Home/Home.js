import React from 'react';
import HomeUpper from './Home-1/HomeUpper';
import HomeMiddle from './Home-middle/HomeMiddle';
import HomeLower from './Home-lower/HomeLower';

const Home = () => {
  return (
    <div>
      <HomeUpper></HomeUpper>
      <HomeMiddle></HomeMiddle>
      <HomeLower></HomeLower>
    </div>
  );
};

export default Home;