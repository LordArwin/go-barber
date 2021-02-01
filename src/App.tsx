import React from 'react';
import AppProvider from './hooks';
import Signin from './pages/Signin';
import GlobalStyle from './style/global';

const App: React.FC = () => (
  <>
    <AppProvider>
      <Signin />
    </AppProvider>
    <GlobalStyle />
  </>
);

export default App;
