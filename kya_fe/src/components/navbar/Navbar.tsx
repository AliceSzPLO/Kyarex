import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import pathRoutesPage from '../../routers/pathPage';
import { colors } from '../../config/index.color';



const pages = ['Home', 'Character'];

function Navbar() {

const navigate = useNavigate();

  return (
    <AppBar sx={{bgcolor:"transparent"}}>
        <Toolbar>
          <Box sx={{ display: "flex"}}>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={()=>{
                    navigate(pathRoutesPage.home)
                }}
              >Home
              </Button>
              <Button
                sx={{ my: 2, color: colors.white, display: 'block' }}
                onClick={()=>{
                    navigate(pathRoutesPage.character)
                }}
              >Character
              </Button>
          </Box>
        </Toolbar>
    </AppBar>
  );
}
export default Navbar;
