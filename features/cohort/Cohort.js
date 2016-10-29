const mongoose = require( "mongoose" );

const Cohort = new mongoose.Schema( {
	  name: { type: String, required: true, minlength: 1 }
	, startDate: { type: Date, default: new Date() }
	, students: [ { type: mongoose.Schema.Types.ObjectId, ref: "User" } ]
	, mentors: [ { type: mongoose.Schema.Types.ObjectId, ref: "User" } ]
} );

module.exports = mongoose.model( "Cohort", Cohort );
