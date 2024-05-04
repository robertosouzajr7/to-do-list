import userModelCopy from "../models/userModel copy.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const createUserService = async (User) => {
  const existingUser = await userModelCopy.findOne({ email: User.email });

  if (existingUser) {
    throw new Error("Usuário já cadastrado");
  }

  const { password } = User;
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = new userModelCopy({
    ...User,
    password: hashedPassword,
  });

  await newUser.save();

  newUser.password = undefined;
  return newUser;
};

export const getAllUsersService = async () => {
  const allUser = await userModelCopy.find();
  return allUser;
};

export const loginUserService = async (email, password) => {
  const user = await userModelCopy.findOne({ email });
  if (!user) {
    throw new Error("Usuário não encontrado");
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    throw new Error("Senha incorreta");
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "1h",
  });

  user.password = undefined;
  return { token, user };
};
