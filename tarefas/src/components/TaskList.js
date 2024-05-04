import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasksThunk } from "../features/tasks/tasksSlice";
import TaskItem from "./TaskItem";
import { Box } from "@mui/material";

function TaskList({ setCurrentTask }) {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    dispatch(fetchTasksThunk());
  }, [dispatch]);

  return (
    <Box sx={{ mt: 2 }}>
      {tasks.map((task) => (
        <TaskItem key={task._id} task={task} setCurrentTask={setCurrentTask} />
      ))}
    </Box>
  );
}

export default TaskList;
