import React from 'react';

const NavBar = () => {
  return (
    <div>
      <label htmlFor="endpoint">Endpoint</label>
      <input id="endpoint" type="text" value={""} onChange={(e) => setEndpoint(e.target.value)} />
      <h1>gql-error-handler GUI</h1>
      <button id="log-out">Log Out</button>
    </div>
  )
};

export default NavBar;