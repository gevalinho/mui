import React from 'react'
import { Stack, Tooltip, Typography } from '@mui/material'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import SentimentVerySatisfied from '@mui/icons-material/SentimentVerySatisfied'
import Image from '@mui/icons-material/Image'
import VideoCameraFront from '@mui/icons-material/VideoCameraFront'
import PersonAddAlt1 from '@mui/icons-material/PersonAddAlt1'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DateRange from '@mui/icons-material/DateRange'
const Add = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 280,
        bgcolor: 'background.default',
        borderRadius: 3,
        color: 'text.primary',
        border: '2px solid #fff',
        boxShadow: 24,
        p: 4,
      };

      const userBox = styled(Box)({
        display: 'flex',
        alignItems: 'center',
        direction: 'row',
        marginBottom: '20px',
      })

  return (
    <>
    <Tooltip title="Add" sx={{position: 'fixed', bottom:20, left: {xs: "calc(50% - 25px)", md: 30}}} onClick={handleOpen}>
    <Fab color="primary" aria-label="add">
    <AddIcon />
    </Fab>
   </Tooltip>

   <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <Typography variant='h6' color={'#9e9e9e'} textAlign={'center'}> Create Post</Typography>
          
          <userBox>
          <Stack direction={'row'} alignItems={'center'} spacing={3}>
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
          <Typography variant='span' color={'#9e9e9e'}> 
            Gevalinho
          </Typography>
          </Stack>
          </userBox>

          <TextField
          id="standard-multiline-static"
          multiline
          rows={4}
          placeholder="Whats on your mind"
          variant="standard"
          sx={{width: '100%', marginTop: '20px'}}
        />
        <Stack direction={'row'} gap={1} mt={2} mb={3}>
        <SentimentVerySatisfied />
        <Image />
        <VideoCameraFront />
        <PersonAddAlt1 />
        </Stack>
        <ButtonGroup variant="contained" aria-label="Basic button group" fullWidth>
       <Button >Post</Button>
       <Button sx={{width: '100px'}}><DateRange/></Button>
       </ButtonGroup>
        </Box>
      </Modal>
    </>
  )
}

export default Add