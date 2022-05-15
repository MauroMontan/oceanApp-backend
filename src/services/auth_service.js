import * as argon from "argon2";

class AuthService {

    static async hashPassword(password) {
        const hash = await argon.hash(password);
        return hash;
    };
}

export default AuthService;
