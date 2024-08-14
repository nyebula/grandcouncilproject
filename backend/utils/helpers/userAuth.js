require("dotenv").config();
const db = require("../db/db");
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401);;
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.status(401);
    }
    else {
      // const user = db.fetchid(data.id)
      // return res.status(200).json({ user: user.username })
      return res.status(200)
    }
  })
}