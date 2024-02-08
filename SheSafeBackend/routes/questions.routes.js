import { Router } from "express";
import { deleteQuestion, addQuestion  ,getQuestions} from "../controller/questions.js";


const router = Router();
router.get("/question", getQuestions);
router.delete("/question/:id", deleteQuestion);
router.post("/question", addQuestion);



export default router;