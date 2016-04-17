var express = require('express');
var router = express.Router();
var todo = require('../controllers/index');

//routers
router.get('/', todo.index);
router.post('/create', todo.create);
router.get('/destroy/:id', todo.destroy);

module.exports = router;
