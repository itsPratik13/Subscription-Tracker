import { Router } from "express";

const router=Router();

router.get("/",(req,res)=>{})
router.get("/:id",(req,res)=>{})
router.post("/",(req,res)=>{})    //add new user
router.put("/:id",(req,res)=>{})       //update user
router.delete("/:id",(req,res)=>{})


export default router;