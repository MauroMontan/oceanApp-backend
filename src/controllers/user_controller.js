import { UserService } from "../services/index.js";

class UserController {
    static async getAllUsers() {
        return await UserService.getAllUsers();
    }
    static async sortUsersbyAmount() {
        return await UserService.sortbyAmount();
    }

    static async setRank1BySeason() {

    }

    static async addAmount(req) {
        const body = req.body;
        const newAmount = body.newAmount;
        return await UserService.setNewAmount(body, newAmount);
    }

    static async updateUser(req) {
        const body = req.body;
        return await UserService.updateUser(body);
    }
}

export default UserController;
