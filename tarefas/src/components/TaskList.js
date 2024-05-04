import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTasksThunk } from "../features/tasks/tasksSlice";
import TaskItem from "./TaskItem";

function TaskList({ setCurrentTask }) {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  useEffect(() => {
    dispatch(fetchTasksThunk());
  }, [dispatch]);

  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} setCurrentTask={setCurrentTask} />
      ))}
    </div>
  );
}

export default TaskList;
