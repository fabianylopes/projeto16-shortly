import express, { json } from "express";
import dotenv from 'dotenv';

dotenv.config();

import router from './routes/index.js';

const app = express();
app.use(json());

app.use(router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(chalk.blue(`Running on port ${PORT}`));
});
