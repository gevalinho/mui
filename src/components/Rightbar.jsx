import React from 'react'
import {Box, Typography} from '@mui/material'
import AvatarGroup from '@mui/material/AvatarGroup'
import Avatar from '@mui/material/Avatar'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';

export const Reghtbar = () => {

  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
   
  ];


  return (
    <><Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box sx={{position: 'fixed', width: '300px'}}>

        <Typography variant='h6' fontWeight={100} color={'#9e9e9e'}>
          Online Friends
        </Typography>
        <AvatarGroup max={8} sx={{alignItems: 'flex-start'}}>
        <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/1.jpg" />
        <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/2.jpg" />
       <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/3.jpg" />
         <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
        <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/1.jpg" />
        <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/2.jpg" />
       <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/3.jpg" />
         <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/5.jpg" />
        </AvatarGroup>

        <Typography variant='h6' fontWeight={100} color={'#9e9e9e'}>
          Latest Photos
        </Typography>

        <ImageList sx={{marginBottom: '5px'}} cols={3} rowHeight={100}>
        {itemData.map((item) => (
        <ImageListItem key={item.img}>
        <img
        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
        alt={item.title}
        loading="lazy"
        />
          </ImageListItem>
           ))}
        </ImageList>

        <Typography variant='h6' fontWeight={100} color={'#9e9e9e'}>
          Latest Conversations
        </Typography>

        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginBottom: '10px' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://mui.com/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    
    </Box></>
  )
}

export default Reghtbar
