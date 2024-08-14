require("dotenv").config();
const db = require("../../db/db");
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    res.status(401);
  }
  else {
    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
      if (err) {
        res.status(401);
      }
      else {
        // const user = db.fetchid(data.id);
        // return res.status(200).json({ user: user.username });
        res.status(200);
      }
    })  
  }
  next();
}