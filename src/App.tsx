import React from 'react';
import Signin from './pages/Signin';
import GlobalStyle from './style/global';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <Signin />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
