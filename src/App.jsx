import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './widgets/Header/Header';
import { Box } from '@chakra-ui/react';

const App = () => {
  return (
    <Box >
      <Header />
      <Box >
        <Outlet />
      </Box>
    </Box>
  );
};

export default App;
