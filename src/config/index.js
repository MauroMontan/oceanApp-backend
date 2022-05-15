import dotenv from "dotenv";

dotenv.config();

class Confing {
    static PORT = process.env.PORT;
}

export default Confing;
