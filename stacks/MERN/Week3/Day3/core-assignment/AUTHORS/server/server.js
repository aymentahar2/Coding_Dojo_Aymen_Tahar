const express = require("express")
const app = express()
const cors = require ("cors")
const DB_NAME = "authors" 

//MIDDLEWARE
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

// Connect to the DB ---------
require("./config/mongoose.config")(DB_NAME)

// import the routes ------------------------------------------------
// //! modularize routes
require("./routes/author.route")(app)

//---------------------------------------PORT
const PORT = process.env.PORT || 5000 ;
//---------------------------------------------------------------
app.listen(PORT, () => { console.log(`Server started on PORT ${PORT} 🆗🆗 `) })
