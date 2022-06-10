import urlSchema from "../schemas/urlSchema.js";

function validateUrl(req, res, next) {
    const url = req.body;

    const validation = urlSchema.validate(url);
    if(validation.error){
        return res.sendStatus(422);
    }
    next()
}

export default validateUrl;