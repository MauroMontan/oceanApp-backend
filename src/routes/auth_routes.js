import {Router} from "express";
import {AuthController } from "../controllers/index.js";

const router = Router();



// router.post("/signup",(req,res)=>{
// });
//

router.post("/signin",(req,res)=>res.json(AuthController.signin()));


export default router;
