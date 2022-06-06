import express, { json } from "express";

const app = express();
app.use(json());

app.listen(4000, () => {
    console.log('Running on port 4000');
});