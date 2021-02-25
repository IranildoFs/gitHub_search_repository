import React from 'react';
import Routes from './routes'

import { BrowserRouter } from 'react-router-dom';
import GlobalStyled from './styles/global';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    <GlobalStyled/>
    </>    
  );
}

export default App;
