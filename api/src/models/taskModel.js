import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "O título é obrigatório"],
    trim: true,
    maxlength: [100, "O título não pode ter mais que 100 caracteres"],
  },
  description: {
    type: String,
    required: [true, "A descrição é obrigatória"],
    trim: true,
    maxlength: [500, "A descrição não pode ter mais que 500 caracteres"],
  },
  status: {
    type: String,
    enum: ["pending", "in progress", "completed"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Task", TaskSchema);
