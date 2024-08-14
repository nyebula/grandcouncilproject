const db = require("../db/db");

const home = async (req, res) => {
    try {
        res.send("Reached the Home Request!");
    }
    catch (e) {
        console.log(e);
        res.status(501);
    }
}

module.exports = { home }
