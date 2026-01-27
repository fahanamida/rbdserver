import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';




function Header() {
const aboutUsContent="A Resume Builder helps users create professional resumes easily and quickly It provides ready-made templates, guided sections, and formatting tools to build a well-structured resume. "

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:'rgba(29, 52, 168, 1)'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src="https://png.pngtree.com/png-clipart/20241028/original/pngtree-magnifying-glass-over-businessmans-resume-clip-art-illustration-png-image_16528742.png" alt="icon" style={{height:'50px'}} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Resume Builder
          </Typography>
          <Tooltip title={aboutUsContent}>
            <Button color="inherit">About Us</Button>
            </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  )
}

export default Header
