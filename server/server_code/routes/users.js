var express = require('express');
var router = express.Router();
var controller = require('../controllers/userActions');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/register', function(req,res) {
  controller.userRegistration(req,res)
});
router.post('/login', function(req,res) {
  controller.login(req,res);
})

module.exports = router;
