import { Router } from "express";
import { getUser, getUsers } from "../controllers/users.controller.js";

const router=Router();

router.get("/",getUsers)
router.get("/:id",getUser)
router.post("/",(req,res)=>{})    //add new user
router.put("/:id",(req,res)=>{})       //update user
router.delete("/:id",(req,res)=>{})


export default router;