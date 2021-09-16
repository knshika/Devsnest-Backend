var express = require('express');
var router = express.Router();
var registerInitialCheck = require('../middlewares/registerChecks')
var register = require('../controllers/register')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/*
@requires {email, fname, lname , password , confirmPass}
@description
Security , performance and edge cases
 * level 1
(middleware)
email validate 
password validate
pass==conf pass
* level 2
js /sql injections (THA)
* level 3 
(controllers - actual logic)
if email already exist
pass hash (if leak)
email case insensitive (lowercas)

*/

router.post('/register',registerInitialCheck,register)

module.exports = router;
