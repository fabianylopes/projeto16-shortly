import { Router } from "express";

import { setSignIn, setSignUp } from "../controllers/authController.js";
import { validateSignIn, validateSignUp } from "../middlewares/validateAuth.js";

const authRouter = Router();

authRouter.post('/signup', validateSignUp, setSignUp);
authRouter.post('/signin', validateSignIn, setSignIn);

export default authRouter;