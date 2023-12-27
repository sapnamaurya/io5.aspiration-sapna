import { Box, Button, Paper, Stack } from "@mui/material";
import React from "react";
import "./style.css";
import Face2Icon from "@mui/icons-material/Face2";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";

const styleForLogo = {
  color: "#700c81",
  width: "32px",
  height: "47px",
  float: "left",
  marginLeft: "4%",
};
const styleForMenu = {
  color: "#700c81",
  width: "35px",
  height: " 47px",
  float: "left",
  marginLeft: "3%",
};
const styleForItems = {
  padding: "0.4%",
  width: "107px",
  fontWeight: "bold",
  marginTop: "0.9%",
};
function Header() {
  return (
    <>
      <Box className="header-main-cont">
        <Paper className="header-cont" elevation={7}>
          <Face2Icon style={styleForLogo} />
          <MenuIcon style={styleForMenu} />
          <Box className="item-cont">
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                color={"secondary"}
                style={styleForItems}
              >
                Add ToDo
              </Button>
              <Button variant="text" style={styleForItems}>
                Go to Wiki
              </Button>
              <Button
                variant="contained"
                color={"secondary"}
                style={styleForItems}
              >
                Logout
              </Button>
            </Stack>
          </Box>

          <TextField
            id="search-bar"
            label="Enter a city name"
            className="text"
            variant="outlined"
            placeholder="Search..."
            size="small"
          />
          {/* <IconButton type="submit" aria-label="search">
          <SearchIcon style={{ fill: "blue" }} /> */}
          {/* </IconButton> */}
        </Paper>
      </Box>
    </>
  );
}
export default Header;
