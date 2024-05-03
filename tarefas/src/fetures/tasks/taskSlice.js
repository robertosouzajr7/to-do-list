import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunks
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await fetch("/api/tasks");
  return response.json();
});

export const addTask = createAsyncThunk("tasks/addTask", async (task) => {
  const response = await fetch("/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return response.json();
});

export const updateTask = createAsyncThunk("tasks/updateTask", async (task) => {
  const response = await fetch(`/api/tasks/${task.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });
  return response.json();
});

export const deleteTask = createAsyncThunk("tasks/deleteTask", async (id) => {
  await fetch(`/api/tasks/${id}`, {
    method: "DELETE",
  });
  return id;
});

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    status: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        state.items[index] = action.payload;
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      });
  },
});

export default taskSlice.reducer;
