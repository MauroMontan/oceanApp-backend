import { prisma } from "../prisma/index.js";
import * as argon from "argon2";

class AuthService {

    static async createUser(user) {
        const newUser = await prisma.user.create({ data: user });
        delete newUser.password;
        return { user: newUser, message: "user created " };
    }

    static async hashPassword(password) {
        const hash = await argon.hash(password);
        return hash;
    }

    static async getCurrentUser(user) {
        
        const currentUser = await prisma.user.findUnique({
            where: {
                email: user.email,
            }
        });

        return currentUser;

    }

    static async verifyPassword(hashPassword, userPassword) {
        const pwMatches = await argon.verify(hashPassword, userPassword);
        return pwMatches;
    }
}

export default AuthService;
