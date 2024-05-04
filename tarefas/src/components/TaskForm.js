import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTaskThunk, updateTaskThunk } from "../features/tasks/tasksSlice";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
        placeholder="Title"
        required
      />
      <input
        type="text"
        name="description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
        placeholder="Description"
        required
      />
      <button type="submit">{currentTask ? "Update Task" : "Add Task"}</button>
      {currentTask && (
        <button type="button" onClick={clearCurrent}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default TaskForm;
