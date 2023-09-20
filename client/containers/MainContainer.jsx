import React from 'react';
import LogSideBar from './LogSideBar.jsx';
import NavBar from './NavBar.jsx';
import QueryContainer from './QueryContainer.jsx';

const MainContainer = () => {

  return (
    <div>
      <NavBar />
      <LogSideBar />
      <QueryContainer />
    </div>
  )
};

export default MainContainer;