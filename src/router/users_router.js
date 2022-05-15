import { Router } from "express";
import { UserController } from "../controllers/index.js"


const router = Router();

router.get("/", async (_, res) => res.json(await UserController.getAllUsers()));

router.get("/amount",async (_,res)=>res.json(await UserController.sortUsersbyAmount()));

export default router;
