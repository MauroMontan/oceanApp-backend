import express, { json } from "express";
import cors from "cors";
import Confing from "./config/index.js";
import { ErrorHandling } from "./middleware/index.js";
import { authRouter, usersRouter } from "./router/index.js";

// TODO: add some handling errors on user service and controller

const port = Confing.PORT || 30001;
const app = express();

app.use(json());

 
const corsOptions = {
    origin: "https://thankful-dune-0bf88f210.1.azurestaticapps.net/"
};

app.use(cors(corsOptions));

app.get("/", (_, res) => {
    res.json("together by oceans API REST");
});

app.use("/auth", authRouter);

app.use("/users", usersRouter);

app.use(ErrorHandling);
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});
