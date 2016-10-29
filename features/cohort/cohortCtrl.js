const Cohort = require( "./Cohort" );

module.exports = {
	postCohort( req, res ) {
		new Cohort( req.body ).save( ( err, cohort ) => {
			if ( err ) {
				return res.status( 500 ).json( err );
			}

			return res.status( 201 ).json( cohort );
		} );
	}

	, getCohorts( req, res ) {
		// Cohort.find( {}, ( err, cohorts ) => {
		// 	if ( err ) {
		// 		return res.status( 500 ).json( err );
		// 	}
		//
		// 	return res.status( 200 ).json( cohorts );
		// } );
		Cohort
			.find()
			.populate( "mentors" )
			.exec( ( err, cohorts ) => {
				if ( err ) {
					return res.status( 500 ).json( err );
				}

				return res.status( 200 ).json( cohorts );
			} );
	}
};
