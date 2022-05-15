import { prisma } from "../prisma/index.js";
class UserService {
    static async getAllUsers() {
        const users = await prisma.user.findMany({
            where: { role: "USER" },
            select: {
                email: true,
                amount: true,
                name: true,
                prizes: true,
                username: true,
            }
        });
        return users;
    }

    static async sortbyAmount() {

        const users = await prisma.user.findMany({
            where: { role: "USER" },
            select: {
                email: true,
                amount: true,
                name: true,
                prizes: true,
                username: true,
            }
        });

        const sortByScore = users.sort((a, b) => a.amount - b.amount);
        return sortByScore.reverse();
    }

    static async setRank1bySeason(user) {
        const newRank1 = await prisma.seasonsRank.create({ data: user });

        return newRank1;
    }

    static async updateUser(user) {
        const updatedUser = await prisma.user.update({ where: { email: user.email }, data: user });
        return { "message": "user updated", user: updatedUser };
    }

    static async setNewAmount(user, newAmount) {
        const tempAmount = parseInt(user.amount) + newAmount;
        const userUpdated = await prisma.user.update({ where: { email: user.email }, data: { amount: tempAmount } });

        return userUpdated;
    }
}

export default UserService;
