const userCtrl = require( "./userCtrl" );

module.exports = app => {
	app.route( "/api/users" )
		.get( userCtrl.getUsers )
		.post( userCtrl.postUser );

	app.route( "/api/users/:id" )
		.put( userCtrl.addProject );

	// app.get( "/api/users", userCtrl.getUsers )
	// app.post( "/api/users", userCtrl.postUser )
};
