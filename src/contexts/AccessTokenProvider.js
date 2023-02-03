import { AccessTokenContext } from './AccessTokenContext';

import React, { useState } from 'react';

function AccessTokenProvider({ children }) {
  let isTokenExist = localStorage.getItem('userToken') ? true : false;
  const [token, setToken] = useState(isTokenExist);

  return (
    <AccessTokenContext.Provider value={{ token, setToken }}>
      {children}
    </AccessTokenContext.Provider>
  );
}

export default AccessTokenProvider;
