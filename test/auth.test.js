import { AuthService } from "../src/services/index.js";

describe('Test Suit for auth module', () => {

    test("1) hashing password", async () => {
        const crypPassword = await AuthService.hashPassword("12345");
        expect.stringContaining(crypPassword);
    });

    test("2) verifying password ", async () => {
        const crypPassword = await AuthService.hashPassword("12345");
        const password = await AuthService.verifyPassword(crypPassword, "12345");

        expect(password).toBe(true);
    });
});
