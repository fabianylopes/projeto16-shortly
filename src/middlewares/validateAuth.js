import { signInSchema, signUpSchema } from "../schemas/authSchema.js";

function validateSignUp(req, res, next) {
    const signUp = req.body;

    const validation = signUpSchema.validate(signUp);
    if(validation.error){
        return res.sendStatus(422);
    }
    next();
}

function validateSignIn(req, res, next) {
    const signIn = req.body;

    const validation = signInSchema.validate(signIn);
    if(validation.error){
        return res.sendStatus(422);
    }
    next();
}

export { validateSignUp, validateSignIn }