import { Router } from "express";

const router=Router();

router.get("/",(req,res)=>{})
router.get("/:id",(req,res)=>{})
router.post("/",(req,res)=>{})
router.put("/:id",(req,res)=>{})
router.delete("/:id",(req,res)=>{})
router.get("/user/:id",(req,res)=>{})  //get user subs
router.put("/:id/cancel",(req,res)=>{})  // cancel subs
router.get("/upcoming-renewals",(req,res)=>{})  //renewal

export default router;