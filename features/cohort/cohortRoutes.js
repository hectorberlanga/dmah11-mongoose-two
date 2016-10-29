const cohortCtrl = require( "./cohortCtrl" );

module.exports = app => {
	app.route( "/api/cohorts" )
		.post( cohortCtrl.postCohort )
		.get( cohortCtrl.getCohorts );
};

// 5814b273ef6c3a4bc6e95f73 - dontavious
// 5814b293ef6c3a4bc6e95f74 - ian