import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTaskThunk, updateTaskThunk } from "../features/tasks/tasksSlice";
import { TextField, Button, Box } from "@mui/material";

function TaskForm({ currentTask, clearCurrent }) {
  const [task, setTask] = useState({ title: "", description: "" });
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentTask) {
      setTask(currentTask);
    } else {
      setTask({ title: "", description: "" });
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentTask) {
      dispatch(updateTaskThunk(task));
    } else {
      dispatch(addTaskThunk(task));
    }
    clearCurrent();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="title"
        label="Titulo da Tarefa"
        name="title"
        autoComplete="title"
        autoFocus
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="description"
        label="Descrição da tarefa"
        name="description"
        multiline
        rows={4}
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 3, mb: 2 }}
      >
        {currentTask ? "Atualizar Tarefa" : "Adcionar Tarefa"}
      </Button>
      {currentTask && (
        <Button
          type="button"
          fullWidth
          variant="outlined"
          color="secondary"
          onClick={clearCurrent}
          sx={{ mt: 1 }}
        >
          Cancelar
        </Button>
      )}
    </Box>
  );
}

export default TaskForm;
