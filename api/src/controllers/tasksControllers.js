import {
  createTaskService,
  deleteTaskService,
  getAllTasksService,
  updateTaskService,
} from "../services/taskService.js";

export const createTaskController = async (req, res) => {
  try {
    const task = req.body;
    const newTask = await createTaskService(task);
    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

export const getAllTasksController = async (req, res) => {
  try {
    const tasks = await getAllTasksService();
    res.status(200).json(tasks);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

export const updateTaskController = async (req, res) => {
  try {
    const { id } = req.params;
    const task = req.body;
    const updatedTask = await updateTaskService(id, task);
    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

export const deleteTaskController = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await deleteTaskService(id);
    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(deletedTask);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};
