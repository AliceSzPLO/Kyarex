import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RoutesPath from './routers/RoutesPath'
import Navbar from './components/navbar/Navbar'
import { ThemeProvider } from '@emotion/react/macro'
import { theme } from './config/theme';
import { useTheme, Box } from '@mui/material';
import HeaderBG from './components/navbar/HeaderBG'
import Container from '@mui/material/Container';

function App() {
  const theme=useTheme();
  return (
      <Container>
        <Box>
          <HeaderBG/>
          <Navbar />
        </Box>
        <Box mt={4}>
            <RoutesPath />
        </Box>
      </Container>
  )
}

export default App
