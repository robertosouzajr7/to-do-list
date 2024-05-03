import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../features/tasks/taskSlice";

function TaskForm({ task }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [description, setDescription] = useState(task ? task.description : "");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      title,
      description,
    };

    if (task) {
      dispatch(updateTask({ ...newTask, id: task.id }));
    } else {
      dispatch(addTask(newTask));
    }

    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          required
        />
      </div>
      <button type="submit">{task ? "Update Task" : "Add Task"}</button>
    </form>
  );
}

export default TaskForm;
