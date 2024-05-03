import {
  createUserService,
  loginUserService,
} from "../services/userService.js";

export const createUserController = async (req, res) => {
  try {
    const user = req.body;
    const newUser = await createUserService(user);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

export const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await loginUserService(email, password);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};
