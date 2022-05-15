import { Router } from "express";
import { AuthController } from "../controllers/index.js";

const router = Router();

router.post("/signup", async (req, res, next) => {

    res.json(await AuthController.signup(req, next));
});


router.post("/signin", (req, res, next) => res.json(AuthController.signin(req, next)));



export default router;
