import React from 'react';

import { GlobalStyle } from './styles/GlobalStyle';

import Home from './pages/Home';

function App(): React.ReactElement {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

export default App;
