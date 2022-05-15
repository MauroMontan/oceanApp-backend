import JWT from "jsonwebtoken";
import { AuthService } from "../services/index.js";
import { User } from "../models/index.js";
const jwt = JWT;

class AuthController {
    static async signup(req, next) {
        const body = req.body;
        try {
            console.log(body);
            const hashedPassword = await AuthService.hashPassword(body.password);
            const user = new User(body, hashedPassword);
            return await AuthService.createUser(user);
        } catch (error) {
            if (error.code === "P2002") {
                next(new Error("explorer already exists"));
            }
            else {
                next(error);
            }
        }

    }
    static async signin(payload, next) {
        const body = payload.body;

        const user = await AuthService.getCurrentUser(body);
        try {
            const isAuthenticated = await AuthService.verifyPassword(user.password, body.password);

            if (isAuthenticated) {
                delete user.password;
                const token = jwt.sign({ user }, "secret_key");
                return { token: token };
            }
            if (!isAuthenticated) {
                return { "message": "invalid credentials", code: 404 };
            }

        } catch (error) {
            next(new Error("invalid credentials"));
        }

    }
}

export default AuthController;
