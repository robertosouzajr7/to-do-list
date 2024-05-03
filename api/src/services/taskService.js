import taskModel from "../models/taskModel.js";

export const createTaskService = async (task) => {
  const newTask = new taskModel(task);
  return newTask.save();
};

export const getAllTasksService = async () => {
  const allTask = await taskModel.find();

  return allTask;
};
export const updateTaskService = async (id, task) => {
  const newTask = await taskModel.findById(id);

  if (!newTask) {
    throw new Error("Tarefa não encontrada");
  }

  const updateTask = await taskModel.findByIdAndUpdate(id, task, { new: true });
  return updateTask;
};

export const deleteTaskService = async (id) => {
  const task = await taskModel.findById(id);

  if (!task) {
    throw new Error("Tarefa não encontrada");
  }

  const deleteTask = await taskModel.findByIdAndDelete(id);
  return deleteTask;
};
