import express from "express"
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import { errorHandler } from "./middleware/errorHandler.js";
import questionRouter from './routes/questions.routes.js';
import userRouter from './routes/users.routes.js';
import chatRouter from './routes/chat.routes.js';


import cors from 'cors'
const server = express();
server.use(cors());


dotenv.config();
server.use(express.json());

//Routers
server.use("/api" , questionRouter);
server.use("/api/user" , userRouter);
server.use("/api/chat", chatRouter);


//errors
server.use(errorHandler);

const PORT = process.env.PORT || 8080 ;
connectDB().then(()=>{
    console.log("connected to mongoo!")
    server.listen(PORT, ()=>
    console.log(`Server online at port ${PORT}`)
    )
})