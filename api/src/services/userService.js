import userModelCopy from "../models/userModel copy.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const createUserService = async (user) => {
  const existingUser = await userModelCopy.findOne({ email: user.email });

  if (existingUser) {
    throw new Error("Usuário já cadastrado");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, salt);
  const newUser = new userModelCopy({
    ...user,
    password: hashedPassword,
  });

  await newUser.save();

  newUser.password = undefined;
  return newUser;
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
    expiresIn: "24h",
  });

  return { token, user: { ...user.toObject(), password: undefined } };
};
