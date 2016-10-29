const mongoose = require( "mongoose" );

const Project = new mongoose.Schema( {
	  name: { type: String, required: true, minlength: 1, trim: true }
	, url: { type: String, required: true, minlength: 1, trim: true }
	, grade: { type: Number, min: 0, max: 10, default: 0 }
} );

const User = new mongoose.Schema( {
	  name: { type: String, required: true, minlength: 1, trim: true }
	, email: { type: String, required: true, minlength: 1, trim: true }
	, projects: [ Project ]
	// , projects: [ { type: mongoose.Schema.Type.ObjectId, ref: "Project" }]
	// , project:  { type: Project, required: true }
} );


module.exports = mongoose.model( "User", User );
