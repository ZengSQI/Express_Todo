var express = require('express');
var router = express.Router();

//routers
router.get('/', function(req, res){
	res.send( req.ip+' Hello!');
});

module.exports = router;
