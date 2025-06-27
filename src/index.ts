import bodyParser from "body-parser";
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import PostRequest from "./dtos/post.request";
import PostHandler from "./utils/post.handler";

dotenv.config();

const app: Express = express()
app.use( bodyParser.json() );
const port = process.env.PORT || 5000;

app.post('/',(req: Request, res: Response) => {
    const body: PostRequest = req.body;
    const response = PostHandler.buildResponse(body);
    res.json(response)
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});