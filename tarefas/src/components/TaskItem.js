import React from "react";
import { useDispatch } from "react-redux";
import { deleteTaskThunk } from "../features/tasks/tasksSlice";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

function TaskItem({ task, setCurrentTask }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTaskThunk(task._id));
  };

  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {task.title}
        </Typography>
        <Typography color="CaptionText">{task.description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => setCurrentTask(task)}>
          Editar
        </Button>
        <Button size="small" onClick={handleDelete}>
          Deletar
        </Button>
      </CardActions>
    </Card>
  );
}

export default TaskItem;
