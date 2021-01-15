import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import Routes from './src/Routes';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <Routes />
    </PaperProvider>
  );
};

export default App;
