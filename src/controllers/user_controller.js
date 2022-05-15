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
}

export default UserController;
