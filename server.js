// require modules
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
// const skillAPIRouter = require('./routes/api/skills'); OG

// todo require CORS module

// initialize express app
const app = express();



// configure settings app.set()?


// todo: require and configure dotenv module
require('dotenv').config();
require('./config/database');




// mount middelware app.use()
app.use(morgan('dev'));
app.use(express.json()); // converts incoming json into req.body
app.use(cors());



// mount our routes app.use()
app.use('/api/blogs', require('./routes/api/blogs'));


// tell the app to listen on port 3001

const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express is listening for AJAX requests on port ${port}`);
});
