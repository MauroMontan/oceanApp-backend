import { Router } from "express";
import { UserController } from "../controllers/index.js"


const router = Router();

router.get("/", async (_, res) => res.json(await UserController.getAllUsers()));

router.get("/amount", async (_, res) => res.json(await UserController.sortUsersbyAmount()));

router.post("/rank/season", async (req, res) => res.json(await UserController.setRank1BySeason(req)));
export default router;
