import { Router } from "express";

import { getUser, getUsers } from "../controllers/users.controller.js";
import authorize from "../middlewares/auth.middleware.js";

const router=Router();

router.get("/",getUsers)
router.get("/:id",authorize,getUser)
router.post("/",(req,res)=>{})    //add new user
router.put("/:id",(req,res)=>{})       //update user
router.delete("/:id",(req,res)=>{})


export default router;