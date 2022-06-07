import { Router } from "express";

const userRouter = Router();

userRouter.get('/users/:id');
userRouter.get('/users/ranking');

export default userRouter;