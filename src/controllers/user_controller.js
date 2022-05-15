import { UserService } from "../services/index.js";

class UserController {
    static async getAllUsers() {
        return await UserService.getAllUsers();
    }
    static async sortUsersbyAmount(){
        return await UserService.sortbyAmount();
    }
}

export default UserController;
