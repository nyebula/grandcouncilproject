const express = require('express');
const { userAuth } = require("../utils/helpers/userAuth"); 
const router = express.Router();

router.post('/', (req, res) => {
  if (userAuth(req)) {
    res.send('Successful Authentication');
  }
  else {
    res.send('Failed to Authenticate');
  }
  
});

module.exports = router;
