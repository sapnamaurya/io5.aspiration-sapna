import React from "react";
import "./style.css";
import { Box, Paper } from "@mui/material";

function Footer() {
  return (
    <Box className="footer">
      <Paper className="footer-paper" elevation={6}>
        All Right Reserved to &copy; Infoxygeb in 2024
      </Paper>
    </Box>
  );
}
export default Footer;
