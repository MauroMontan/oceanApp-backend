import express, { json } from "express";
import Confing from "./config/index.js";
import { ErrorHandling } from "./middleware/index.js";

const port = Confing.PORT || 30001;
const app = express();

app.use(json());

app.get("/", (_, res) => {
    res.json("holas");
});


app.use(ErrorHandling);
app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});
