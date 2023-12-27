import React from "react";
import SingleToDo from "../SingleToDo";
import { Box } from "@mui/material";
import "./style.css";

function ToDoPage() {
  return (
    <>
      <Box className="todo-cont">
        <SingleToDo />
        {/* <SingleToDo />
        <SingleToDo />
        <SingleToDo />
        <SingleToDo />
        <SingleToDo />
        <SingleToDo />
        <SingleToDo />
        <SingleToDo />
        <SingleToDo /> */}
      </Box>
    </>
  );
}
export default ToDoPage;
