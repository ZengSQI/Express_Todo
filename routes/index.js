var express = require('express');
var router = express.Router();
var todo = require('../controllers/index');

//routers
router.get('/', todo.index);
router.post('/create', todo.create);
router.get('/destroy/:id', todo.destroy);
router.get('/edit/:id', todo.edit);
router.post('/update/:id', todo.update);

module.exports = router;
