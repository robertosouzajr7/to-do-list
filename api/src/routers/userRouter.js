import express from "express";
import {
  createUserController,
  loginUserController,
} from "../controllers/usersControllers.js";

const userRouter = express.Router();

// Criar usuário
userRouter.post("/users", createUserController);

// Login do usuário
userRouter.post("/users/login", loginUserController);

export default userRouter;
