require("dotenv").config();
const jwt = require("jsonwebtoken");

// // CODE IF USED AS ROUTER
// module.exports.userVerification = (req, res) => {
//   const token = req.cookies.token;
//   if (!token) {
//     return res.json({ status: false });
//   }
//   jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
//     if (err) {
//       return res.json({ status: false });
//     }
//     else {
//       return res.json({ status: true });
//     }
//   })
// }

module.exports.userVerification = (req) => {
  const token = req.cookies.token;
  if (!token) {
    return false;
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
      return false;
    }
    else {
      return true;
    }
  })
}