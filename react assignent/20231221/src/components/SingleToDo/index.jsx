import React from "react";
import "./style.css";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";

import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import ListItemText from "@mui/material/ListItemText";
import { Box, Button, TextField } from "@mui/material";
// const styleForDelete = {
//   display: "none",
// };

function SingleToDo() {
  const arrayList = [
    { id: "1", title: "wake early  morning", time: "7:00" },
    { id: "2", title: "rclean your teeth", time: "7:30" },
    { id: "3", title: "get ready for school", time: "8:00" },
  ];

  return (
    <>
      <Card sx={{ maxWidth: 345 }} className="single-todo">
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <Box>
          <TextField
            id="outlined-basic"
            className="text-field"
            label="Add ToDo"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            className="text-field"
            label="Time"
            variant="outlined"
          />
          <Button variant="contained">+</Button>
        </Box>
        <CardContent>
          {arrayList.map((list, index) => {
            return (
              <List dense={true} key={index} className="todo-list">
                <ListItem
                  secondaryAction={
                    <>
                      <IconButton
                        className="icons"
                        edge="end"
                        aria-label="edit"
                      >
                        <ModeEditIcon />
                      </IconButton>
                      <IconButton
                        className="icons"
                        edge="end"
                        aria-label="delete"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </>
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={list?.title} />
                </ListItem>
              </List>
            );
          })}
        </CardContent>
        <CardActions disableSpacing>
          <IconButton disabled aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton disabled aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
}
export default SingleToDo;
