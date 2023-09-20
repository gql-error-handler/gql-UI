import React from 'react';
import Log from './Log.jsx';

const LogSideBar = () => {
  return (
    <div>
      {/* button removes past log from QueryContainer in order to enter new query */}
      <button id="new-query">New Query</button>
      <h2>Log History</h2>
      <Log />
    </div>
  )
};

export default LogSideBar;