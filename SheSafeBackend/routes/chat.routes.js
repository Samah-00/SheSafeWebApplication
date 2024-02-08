import { Router } from "express";
import { sendChat } from "../controller/chat.js";



const router = Router();

router.post("/", sendChat);

export default router;