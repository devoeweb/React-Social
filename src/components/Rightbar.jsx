import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={500} mt={2} mb={2}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={4}>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/16314017/pexels-photo-16314017/free-photo-of-pale-blonde-wearing-a-green-coat-standing-outdoors-with-a-book-in-hands.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.pexels.com/photos/17913915/pexels-photo-17913915/free-photo-of-pretty-blonde-sitting-on-an-old-fashioned-tv-set-lying-in-a-summer-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/17709800/pexels-photo-17709800/free-photo-of-portrait-of-a-long-haired-brunette-standing-outdoors-with-freshly-picked-plants-in-hands.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          />
          <Avatar
            alt="Agnes Walker"
            src="https://images.pexels.com/photos/13895147/pexels-photo-13895147.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/17709800/pexels-photo-17709800/free-photo-of-portrait-of-a-long-haired-brunette-standing-outdoors-with-freshly-picked-plants-in-hands.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={400} gap={5}>
          <ImageListItem>
            <img
              alt="Trevor Henderson"
              src="https://images.pexels.com/photos/17709800/pexels-photo-17709800/free-photo-of-portrait-of-a-long-haired-brunette-standing-outdoors-with-freshly-picked-plants-in-hands.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt="Trevor Henderson"
              src="https://images.pexels.com/photos/16314017/pexels-photo-16314017/free-photo-of-pale-blonde-wearing-a-green-coat-standing-outdoors-with-a-book-in-hands.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              alt="Trevor Henderson"
              src="https://images.pexels.com/photos/13895147/pexels-photo-13895147.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" mt={2} fontWeight={100}>
          Latest Conversations
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/17709800/pexels-photo-17709800/free-photo-of-portrait-of-a-long-haired-brunette-standing-outdoors-with-freshly-picked-plants-in-hands.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />
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
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
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
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
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
    </Box>
  );
};

export default Rightbar;
