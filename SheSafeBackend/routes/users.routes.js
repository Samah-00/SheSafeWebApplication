import { Router } from "express";
import {createUser, loginUser ,updatePoints, getPoints} from "../controller/users.js";



const router = Router();

router.post("/register", createUser);
router.post("/login", loginUser);
router.put("/updatePoints", updatePoints);
router.get("/getPoints",  getPoints);
// router.get("/profile",  userProfile);
// router.get("/point",  userPoints);
// router.put("/point", updateUserPoints);

export default router;