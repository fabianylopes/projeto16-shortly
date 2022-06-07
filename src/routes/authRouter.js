import { Router } from "express";
import { setSignIn, setSignUp } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post('/signup', setSignUp);
authRouter.post('/signin', setSignIn);

export default authRouter;