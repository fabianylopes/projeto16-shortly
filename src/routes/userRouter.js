import { Router } from "express";

import { getUser, getUserById } from "../controllers/userController.js";
import { validateToken } from "../middlewares/validateToken.js";

const userRouter = Router();

userRouter.get('/users', getUser)
userRouter.get('/users/:id', getUserById);
userRouter.get('/ranking');

export default userRouter;