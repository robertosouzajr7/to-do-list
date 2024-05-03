import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "./features/tasks/taskSlice";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function Home() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.items);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default Home;
