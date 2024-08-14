require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401);;
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return res.status(401);;
    }
  })
}