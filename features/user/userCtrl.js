const User = require( "./User" );

module.exports = {
	postUser( req, res ) {
		new User( req.body ).save( ( err, user ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}

			return res.status( 201 ).json( user );
		} );
	}

	, getUsers( req, res ) {
		User.find( {}, ( err, users ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}

			return res.status( 200 ).json( users );
		} );
	}

	, addProject( req, res ) {
		User.findByIdAndUpdate( req.params.id, { $push: { projects: req.body } }, ( err, user ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}

			User.findById( req.params.id, ( err, user ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}

				return res.status( 201 ).json( user );
			} );

			// User
			// 	.findById( req.params.id )
			// 	.then( user => console.log( user ) )
			// 	.catch( err => console.log( error ) );
		} );
	}
};

//
// function maybeError( bool ) {
// 	if ( bool ) {
// 		throw new Error( "True!" );
// 	}
// }
//
// try {
// 	maybeError( true );
// } catch ( err ) {
// 	console.log( err );
// }