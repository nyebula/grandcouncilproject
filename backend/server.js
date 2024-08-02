const express = require("express");
const cors = require("cors");
const db = require("./db/db");
const index = require("./routes/index");
const login = require("./routes/login");

const PORT = 8080

const app = express();

db.connect()

app.use(cors());
app.use(express.json());

// adding routes

app.use("/", index);
app.use("/api/login", login);

app.listen(PORT, () => {
    console.log("Server is up on port", PORT);
});


module.exports = app;
