import dotenv from "dotenv";

dotenv.config();

class Confing {
    static PORT = process.env.PORT;
    static SECRETKEY = process.env.SECRETKEY;
}

export default Confing;
