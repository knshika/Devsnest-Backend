const express = require('express');
const router = express.Router();
const path = require('path');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/file/name', function(req, res, next) {
  res.sendFile(path.join(__dirname,"../public/images/bird-thumbnail.jpg"),'img.jpg')
});


module.exports = router;
