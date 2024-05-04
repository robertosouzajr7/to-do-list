import React from "react";
import { useDispatch } from "react-redux";
import { deleteTaskThunk } from "../features/tasks/tasksSlice";

function TaskItem({ task, setCurrentTask }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTaskThunk(task._id));
  };

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => setCurrentTask(task)}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TaskItem;
