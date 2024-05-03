import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import TaskForm from "./taskForm";

function TaskItem({ task }) {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = React.useState(false);

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  return (
    <div style={{ margin: "10px", padding: "10px", border: "1px solid #ccc" }}>
      {editMode ? (
        <TaskForm task={task} />
      ) : (
        <>
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </>
      )}
      <button onClick={handleDelete} style={{ marginLeft: "10px" }}>
        Delete
      </button>
    </div>
  );
}

export default TaskItem;
