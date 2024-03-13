import {
  Box,
  Fab,
  Modal,
  styled,
  Tooltip,
  Typography,
  Avatar,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% -25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClick={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box bgcolor={"background.default"} color={"text.primary"} width={400} height={280} p={3} borderRadius={5}>
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              alt="Trevor Henderson"
              src="https://images.pexels.com/photos/17709800/pexels-photo-17709800/free-photo-of-portrait-of-a-long-haired-brunette-standing-outdoors-with-freshly-picked-plants-in-hands.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            />
            <Typography fontWeight={500} variant="span">
              Рандом Телка
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup fullWidth variant="contained" aria-label="Basic button group">
            <Button>Post</Button>
            <Button sx={{width:"100px"}}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
