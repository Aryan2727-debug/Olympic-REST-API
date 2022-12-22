const express = require("express");
require("./db/conn");
const newRouter = require("./routers/men");

const app = express();

app.use(express.json());

app.use(newRouter);

app.listen(80, () => {
    console.log("App started at port 80");
});