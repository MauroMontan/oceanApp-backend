import * as argon from "argon2";

class AuthService {

    static async hashPassword(password) {
        const hash = await argon.hash(password);
        return hash;
    };

    static async verifyPassword(hashPassword, userPassword) {
        const pwMatches = await argon.verify(hashPassword, userPassword);
        return pwMatches;
    }
}

export default AuthService;
