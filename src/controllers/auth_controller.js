import { AuthService } from "../services/index.js";
import * as jwt from "jsonwebtoken";

class AuthController {
    static signup() {
    }

    static signin() {
        const user = {id:3};
        const token = jwt.sign({user},"secret_key");
        return token;
    }
}

export default AuthController;
