import { Router } from "express";
import { SignIn, SignOut, SignUp } from "../controllers/auth.controller.js";

const router=Router();

router.post("/sign-up",SignUp)
router.post("/sign-in",SignIn)
router.post("/sign-out",SignOut)


export default router;