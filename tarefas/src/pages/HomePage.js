import React, { useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

function HomePage() {
  const [currentTask, setCurrentTask] = useState(null);

  const clearCurrent = () => {
    setCurrentTask(null);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm currentTask={currentTask} clearCurrent={clearCurrent} />
      <TaskList setCurrentTask={setCurrentTask} />
    </div>
  );
}

export default HomePage;
