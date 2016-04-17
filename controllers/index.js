var mongoose = require( 'mongoose' );
var Todo     = mongoose.model( 'Todo' );
	
//Create
exports.create = function ( req, res ){
  new Todo({
    content    : req.body.content,
    updated_at : Date.now()
  }).save( function( err, todo, count ){
    res.redirect( '/' );
  });
};

//Delete
exports.destroy = function ( req, res ){
  Todo.findById( req.params.id, function ( err, todo ){
    todo.remove( function ( err, todo ){
      res.redirect( '/' );
    });
  });
};

//Display
exports.index = function ( req, res ){
  Todo.
	find().
	sort('-updated_at').
	exec( function ( err, todos ){
	  res.render( 'index', {
        title : 'Express Todo Example',
        todos : todos
    });
  });
};

//Edit
exports.edit = function ( req, res ){
  Todo.
	find().
	sort('-updated_at').
	exec( function ( err, todos ){
    res.render( 'edit', {
        title   : 'Express Todo Example',
        todos   : todos,
        current : req.params.id
    });
  });
};


//Update
exports.update = function ( req, res ){
  Todo.findById( req.params.id, function ( err, todo ){
    todo.content    = req.body.content;
    todo.updated_at = Date.now();
    todo.save( function ( err, todo, count ){
      res.redirect( '/' );
    });
  });
};
module.exports = exports;
