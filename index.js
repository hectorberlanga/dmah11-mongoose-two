const express = require( "express" );
const json = require( "body-parser" ).json;
const mongoose = require( "mongoose" );
const port = 4000;
const app = express();

mongoose.connect( "mongodb://localhost:27017/cohorts" );
mongoose.connection.once( "open", () => console.log( "Mongoose is connected to MongoDB" ) );

app.use( json() );

// const userRoutes = require( "./features/user/userRoutes" );
// userRoutes( app );

require( "./features/user/userRoutes" )( app );
require( "./features/cohort/cohortRoutes" )( app );

app.listen( port, () => console.log( `Express listening on ${ port }` ) );
