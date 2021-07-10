import React from 'react';
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'react-native';

const App = () => {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#ff0000',
      background: '#3c3c3c',
      placeholder: '#fff',
      text: '#fff',
    },
  };
  return (
    <>
      <PaperProvider theme={theme}>
        <StatusBar backgroundColor="#000" />
        <Home />
      </PaperProvider>
    </>
  );
};

export default App;
