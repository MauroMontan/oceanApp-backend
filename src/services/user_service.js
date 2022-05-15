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
}

export default UserService;
