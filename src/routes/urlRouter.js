import { Router } from "express";
import { deleteUrl, getUrl, setUrl } from "../controllers/urlController.js";
import { validateToken } from "../middlewares/validateToken.js";
import validateUrl from "../middlewares/validateUrl.js";

const urlRouter = Router();

urlRouter.post('/urls/shorten', validateToken, validateUrl, setUrl);
urlRouter.get('/urls/:id', getUrl);
urlRouter.get('/urls/open/:shortUrl');
urlRouter.delete('/urls/:id', deleteUrl);

export default urlRouter;