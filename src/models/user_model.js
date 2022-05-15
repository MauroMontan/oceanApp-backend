
class User {
    constructor(payload,hashedPassword) {
        this.email = payload.email;
        this.name = payload.name;
        this.username = payload.username;
        this.phone_number = payload.phone_number;
        this.birthday = payload.birhday;
        this.adress = payload.adress;
        this.amount = payload.amount;
        this.prizes = payload.prizes;
        this.password = hashedPassword;
    }
}


export default User;
