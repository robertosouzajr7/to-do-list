import express from "express";
import bodyParser from "body-parser";
import userRouter from "./routers/userRouter.js";
import taskRouter from "./routers/taskRouter.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(bodyParser.json());

// Configura rotas
app.use("/api", userRouter);
app.use("/api", taskRouter);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });
