const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const db = require("./db/db");
const index = require("./routes/index");
const login = require("./routes/login");

const app = express();

db.connect()

app.use(cors());
app.use(cookieParser())
app.use(express.json());

// adding routes
app.use("/", index);
app.use("/api/login", login);

app.listen(process.env.PORT, () => {
    console.log("Server is up on port", process.env.PORT);
});

module.exports = app;
