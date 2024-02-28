import React from 'react'
import {Box, List, ListItem, ListItemIcon, ListItemText, ListItemButton, Divider, Switch } from '@mui/material'
import Home from '@mui/icons-material/Home'
import Article from '@mui/icons-material/Article'
import People from '@mui/icons-material/People'
import Storefront from '@mui/icons-material/Storefront'
import Person from '@mui/icons-material/Person'
import Settings from '@mui/icons-material/Settings'
import ContactPage from '@mui/icons-material/ContactPage'
import ModeNight from '@mui/icons-material/ModeNight'



export const Sidebar = ({mode, setMode}) => {


const label = {inputProps: { 'aria-lebel': 'Switch demo'}};

  return (
    <><Box flex={1} p={2}  sx={{ display: { xs: 'none', sm: 'block' }}}>
      <Box sx={{ position: 'fixed'}}>
      <List>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon>
              <Article />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component='a' href='#'>
            <ListItemIcon>
              <People />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Storefront />
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ContactPage />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
      </List>
    <Divider />
        <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ModeNight />
            </ListItemIcon>
            <Switch {...label} onChange={e=>setMode(mode === 'light' ? 'dark' : 'light')} />
          </ListItemButton>
        </ListItem>
        </List>
        </Box>
      </Box></>
  )
}

export default Sidebar