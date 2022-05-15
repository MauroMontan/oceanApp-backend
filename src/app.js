import express, { json } from "express";
import Confing from "./config/index.js";
import { ErrorHandling } from "./middleware/index.js";
import { authRouter,usersRouter } from "./router/index.js";

// TODO: add some handling errors on user service and controller

const port = Confing.PORT || 30001;
const app = express();

app.use(json());

app.get("/", (_, res) => {
    res.json("holas");
});

app.use("/auth",authRouter);

app.use("/users",usersRouter);

app.use(ErrorHandling);
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});
