import React, { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { Container, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
function HomePage() {
  const [currentTask, setCurrentTask] = useState(null);
  const navigate = useNavigate();
  const clearCurrent = () => {
    setCurrentTask(null);
  };

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, []);

  return (
    <Container component="main" maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Minhas Tarefas
        </Typography>
        <TaskForm currentTask={currentTask} clearCurrent={clearCurrent} />
        <TaskList setCurrentTask={setCurrentTask} />
      </Box>
    </Container>
  );
}

export default HomePage;
