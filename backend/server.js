const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const db = require("./db/db");
const index = require("./routes/index");
const authRouter = require("./routes/authRouter");

const app = express();

db.connect()


app.use(cors({
  methods: 'GET,POST,PATCH,DELETE,OPTIONS',
  optionsSuccessStatus: 200,
  origin: 'http://localhost:3000',
  credentials: true
}));
app.options('*', cors());


app.use(cookieParser())
app.use(express.json());


// adding routes
app.use("/", index);
app.use("/api/", authRouter);

app.listen(process.env.PORT, () => {
    console.log("Server is up on port", process.env.PORT);
});

module.exports = app;
