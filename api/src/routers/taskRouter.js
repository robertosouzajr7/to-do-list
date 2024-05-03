import express from "express";
import {
  createTaskController,
  deleteTaskController,
  getAllTasksController,
  updateTaskController,
} from "../controllers/tasksControllers.js";

const taskRouter = express.Router();

taskRouter.get("/tasks", getAllTasksController);
taskRouter.post("/tasks", createTaskController);

taskRouter.delete("/tasks/:id", deleteTaskController);
taskRouter.put("/tasks/:id", updateTaskController);

export default taskRouter;
